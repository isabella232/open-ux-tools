import { join } from 'path';
import { Editor } from 'mem-fs-editor';
import { render } from 'ejs';
import { generate as generateUi5Project, Package } from '@sap-ux/ui5-application-writer';
import { generate as addOdataService } from '@sap-ux/odata-service-writer';
import { getPackageJsonTasks } from './packageConfig';
import cloneDeep from 'lodash/cloneDeep';
import { BasicAppSettings, FreestyleApp, TemplateType } from './types';
import { setDefaults } from './defaults';

/**
 * Generate a UI5 application based on the specified Fiori Freestyle floorplan template.
 *
 * @param basePath - the absolute target path where the application will be generated
 * @param data - configuration to generate the freestyle application
 * @param fs - an optional reference to a mem-fs editor
 * @returns Reference to a mem-fs-editor
 */
async function generate<T>(basePath: string, data: FreestyleApp<T>, fs?: Editor): Promise<Editor> {
    // Clone rather than modifying callers refs
    const ffApp: FreestyleApp<T> = cloneDeep(data) as FreestyleApp<T>;
    // set defaults
    setDefaults(ffApp);

    fs = await generateUi5Project(basePath, ffApp, fs);

    // add new and overwrite files from templates e.g.
    const tmplPath = join(__dirname, '..', 'templates');
    // Common files
    fs.copyTpl(join(tmplPath, 'common', 'add', '**/*.*'), basePath, ffApp);

    fs.copyTpl(join(tmplPath, ffApp.template.type, 'add', `**/*.*`), basePath, ffApp, undefined, {});

    if (ffApp.template.type === TemplateType.Basic) {
        const viewName = (ffApp.template.settings as BasicAppSettings).viewName;
        const viewTarget = join(basePath, 'webapp', 'view', `${viewName}.view.xml`);
        fs.copyTpl(join(tmplPath, ffApp.template.type, 'custom/View.xml'), viewTarget, ffApp);
        const controllerTarget = join(basePath, `webapp/controller/${viewName}.controller.js`);
        fs.copyTpl(join(tmplPath, ffApp.template.type, 'custom/Controller.js'), controllerTarget, ffApp);
    }

    // Add template specific manifest settings
    const manifestPath = join(basePath, 'webapp', 'manifest.json');
    const extRoot = join(__dirname, '..', 'templates', ffApp.template.type, 'extend', 'webapp');
    fs.extendJSON(manifestPath, JSON.parse(render(fs.read(join(extRoot, 'manifest.json')), ffApp)));

    // i18n.properties
    fs.append(
        join(basePath, 'webapp', 'i18n', 'i18n.properties'),
        render(fs.read(join(extRoot, 'i18n', 'i18n.properties')), ffApp)
    );

    // package.json
    const packagePath = join(basePath, 'package.json');
    fs.extendJSON(packagePath, JSON.parse(render(fs.read(join(tmplPath, 'common', 'extend', 'package.json')), ffApp)));
    const packageJson: Package = JSON.parse(fs.read(packagePath));

    packageJson.scripts = Object.assign(packageJson.scripts, {
        ...getPackageJsonTasks({
            localOnly: !ffApp.service?.url,
            addMock: !!ffApp.service?.metadata,
            sapClient: ffApp.service?.client,
            flpAppId: ffApp.app.flpAppId,
            startFile: data?.app?.startFile,
            localStartFile: data?.app?.localStartFile
        })
    });

    fs.writeJSON(packagePath, packageJson);

    // Add service to the project if provided
    if (ffApp.service) {
        await addOdataService(basePath, ffApp.service, fs);
    }

    return fs;
}

export { generate, FreestyleApp };
export { WorklistSettings, ListDetailSettings, TemplateType, Template, OdataVersion } from './types';
