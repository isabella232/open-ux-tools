/* tslint:disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\-]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\-]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\-]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\-]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\-]*$".
 */
export type TerminologySetting =
    | {
          /**
           * Represents the alternative for bundleUrl
           */
          bundleName: string;
          /**
           * Represents the list of supported locales
           */
          supportedLocales?: unknown[];
      }
    | {
          /**
           * Represents the URL for the resource bundle
           */
          bundleUrl: string;
          /**
           * Indicates whether url is relative to component (default) or manifest
           */
          bundleUrlRelativeTo?: 'manifest' | 'component';
          /**
           * Represents the list of supported locales
           */
          supportedLocales?: unknown[];
      };
export type Version = string;
export type Tag = string[];
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]*$".
 */
export type DataSource = DataSourceEnum | DataSourceCustom;
export type ObjectName = string;
export type ObjectType = 'query' | 'cdsprojectionview' | 'view' | 'inamodel';
/**
 * Represents sapui5 attributes
 */
export type JSONSchemaForSAPUI5Namespace = {
    /**
     *  Represents SAPUI5 attributes format version. It is managed by namespace owner
     */
    _version?:
        | '1.1.0'
        | '1.2.0'
        | '1.3.0'
        | '1.4.0'
        | '1.5.0'
        | '1.6.0'
        | '1.7.0'
        | '1.8.0'
        | '1.9.0'
        | '1.10.0'
        | '1.11.0'
        | '1.12.0'
        | '1.13.0';
    /**
     * Represents paths to JavaScript/CSS resources that your app needs (app internal), formerly called '.includes'
     */
    resources?: {
        js?: {
            uri: string;
            [k: string]: unknown;
        }[];
        css?: {
            uri: string;
            id?: string;
            [k: string]: unknown;
        }[];
        [k: string]: unknown;
    };
    /**
     * Represents the explicit usage declaration for UI5 reuse components
     */
    componentUsages?: {
        [k: string]: ComponentUsages;
    };
    /**
     * Represents external dependences such as libraries or components, that will be loaded by UI5 Core in the initialization phase of your Component and can be used after it
     */
    dependencies: {
        /**
         * Represents the minimum version of SAP UI5 that your component requires
         */
        minUI5Version: string;
        /**
         * Represents the id (namespace) of the libraries that should be loaded by UI5 Core to be used in your component
         */
        libs?: {
            [k: string]: Lib;
        };
        /**
         * Represents the id (namespace) of the components that should be loaded by UI5 Core to be used in your component
         */
        components?: {
            [k: string]: Component;
        };
    };
    /**
     * Represents models which should be created/destroyed with the life-cycle of the component
     */
    models?: {
        [k: string]: Model;
    };
    /**
     * Represents relative path to the resource. Only relative path allowed, no '../'
     */
    resourceRoots?: {
        [k: string]: ResourceRoot;
    };
    /**
     * Represents the usage of validation handling by MessageManager for this component (enable/disable)
     */
    handleValidation?: boolean;
    /**
     * Represents the static configuration for components
     */
    config?: {
        [k: string]: Config;
    };
    /**
     * Represents the extension of an additional component
     */
    extends?: {
        /**
         * Represents the component name
         */
        component?: string;
        /**
         * Represents minimal version of the component
         */
        minVersion?: string;
        /**
         * Represents extensions of the component
         */
        extensions?: {
            [k: string]: unknown;
        };
    };
    /**
     * Represents object with content density modes the app is supporting. Supported density modes are 'cozy' and 'compact'
     */
    contentDensities: {
        /**
         * Represents indicator whether compact mode is supported
         */
        compact: boolean;
        /**
         * Represents indicator whether cozy mode is supported
         */
        cozy: boolean;
    };
    /**
     * Represents a name of the UI5 component
     */
    componentName?: string;
    /**
     * Enables the auto prefixing of IDs of ManagedObjects (e.g. Controls) which are created in context of the Component (e.g. createContent invocation)
     */
    autoPrefixId?: boolean;
    /**
     * Represents the identifier of an application variant. The value will be calculated and should not be set manually
     */
    appVariantId?: string;
    /**
     * Represents array of appVariantId hierarchy with origin layer and version, calculated attribute and filled automatically during variant merge
     */
    appVariantIdHierarchy?: {
        /**
         * Represents origin layer of the app variant id
         */
        layer: string;
        /**
         * Represents app variant id
         */
        appVariantId: string;
        /**
         * Represents version of the app variant id
         */
        version: string;
    }[];
    /**
     * Represents a list of the services
     */
    services?: {
        [k: string]: Service;
    };
    /**
     * Represents UI5 library specific properties
     */
    library?: {
        /**
         * Flag whether the library contains a i18n resource or not. If using a string instead of a boolean value an alternative name for the i18n resource could be defined.
         */
        i18n?: boolean | string;
        /**
         * Flag whether the library contains a CSS file or not.
         */
        css?: boolean | string;
        /**
         * Represents the content of a library. Content are controls, elements, types and interfaces.
         */
        content?: {
            [k: string]: unknown;
        };
    };
    /**
     * Represents a list of UI5 shortcut commands
     */
    commands?: {
        [k: string]: Command;
    };
    /**
     * Represents an indicator whether app variant is flex extension point enabled
     */
    flexExtensionPointEnabled?: boolean;
    [k: string]: unknown;
} & (
    | {
          /**
           * Represents an Indicator whether an app is flex enabled
           */
          flexEnabled: true;
          routing?: RoutingFlexEnabled;
          rootView?: RootViewDefFlexEnabled;
          [k: string]: unknown;
      }
    | {
          /**
           * Represents an Indicator whether an app is flex enabled
           */
          flexEnabled?: false;
          routing?: Routing;
          rootView?: RootViewDef;
          [k: string]: unknown;
      }
);
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]*$".
 */
export type ResourceRoot = string;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "[\s\S]*".
 */
export type Config =
    | string[]
    | string
    | boolean
    | number
    | {
          [k: string]: unknown;
      };
/**
 * Represents the definition of each route
 */
export type Route = RouteWithoutName & {
    /**
     * Represents the name of the route
     */
    name: string;
    [k: string]: unknown;
};
/**
 * Represents the root view definition being either the name of the view or the view definition object
 */
export type RootViewDef =
    | string
    | {
          /**
           * Represents the name of the view
           */
          viewName: string;
          /**
           * Represents the type of the view. Possible Values: XML, JSON, JS, HTML, Template
           */
          type?: 'XML' | 'JSON' | 'JS' | 'HTML' | 'Template';
          /**
           * Represents the id of the view
           */
          id?: string;
          /**
           * Configure the targets for asynchronous loading
           */
          async?: boolean;
          [k: string]: unknown;
      };
/**
 *  Represents a binding string to indicate, how the reuse component should be bound relative to the containing page or absolute
 */
export type ComponentBindingDef = string;
/**
 * Represents the card default grid size in columns and rows
 */
export type DefaultSpanDef =
    | {
          /**
           * Represents the number of the number of grid columns
           */
          cols: number;
          /**
           * Represents the number of the number of grid rows
           */
          rows: number;
          /**
           * Represents if user wants to show only header part of card in resizable layout
           */
          showOnlyHeader?: boolean;
          /**
           * If user wants to show more text in title then he/she can configure no of lines to be shown in title(Maximum allowed 3 lines)
           */
          minimumTitleRow?: number;
          /**
           * If user wants to show more text in title then he/she can configure no of lines to be shown in sub-title(Maximum allowed 2 lines)
           */
          minimumSubTitleRow?: number;
      }
    | 'auto';
/**
 * Plot area is a parent property which defines multiple other properties for smoothness and marker size
 */
export type LevelsDef = unknown[];
/**
 * Represents general card attributes
 */
export type JSONSchemaForSAPCARDNamespace = {
    [k: string]: unknown;
};
/**
 * The version number of the schema in major.minor.patch format.
 */
export type Semanticversion = string;

export interface SAPJSONSchemaForWebApplicationManifestFile {
    /**
     * Represents Application Descriptor format version. It is managed by schema owner
     */
    _version:
        | '1.1.0'
        | '1.2.0'
        | '1.3.0'
        | '1.4.0'
        | '1.5.0'
        | '1.6.0'
        | '1.7.0'
        | '1.8.0'
        | '1.9.0'
        | '1.10.0'
        | '1.11.0'
        | '1.12.0'
        | '1.13.0'
        | '1.14.0'
        | '1.15.0'
        | '1.16.0'
        | '1.17.0'
        | '1.18.0'
        | '1.19.0'
        | '1.20.0'
        | '1.21.0'
        | '1.22.0'
        | '1.23.0'
        | '1.24.0'
        | '1.25.0'
        | '1.26.0'
        | '1.27.0'
        | '1.28.0'
        | '1.29.0'
        | '1.30.0'
        | '1.31.0'
        | '1.32.0'
        | '1.33.0'
        | '1.34.0'
        | '1.35.0'
        | '1.36.0'
        | '1.37.0'
        | '1.38.0';
    /**
     * Represents the URL that the developer would prefer the user agent load when the user launches the web application
     */
    start_url?: string;
    'sap.app': JSONSchemaForSAPAPPNamespace;
    'sap.ui': JSONSchemaForSAPUINamespace;
    'sap.ui5'?: JSONSchemaForSAPUI5Namespace;
    'sap.platform.abap'?: JSONSchemaForSAPPLATFORMABAPNamespace;
    'sap.platform.hcp'?: JSONSchemaForSAPPLATFORMHCPNamespace;
    'sap.platform.cf'?: JSONSchemaForSAPPLATFORMCFNamespace;
    'sap.platform.mobilecards'?: JSONSchemaForSAPPLATFORMMOBILECARDSNamespace;
    'sap.fiori'?: JSONSchemaForSAPFIORINamespace;
    'sap.ui.generic.app'?: JSONSchemaForSAPUIGENERICAPPNamespace;
    'sap.fe'?: JSONSchemaForSAPFENamespace;
    'sap.flp'?: JSONSchemaForSAPFLPNamespace;
    'sap.ovp'?: JSONSchemaForSAPOVPNamespace;
    'sap.wda'?: JSONSchemaForSAPWDANamespace;
    'sap.apf'?: JSONSchemaForSAPAPFNamespace;
    'sap.cloud.portal'?: JSONSchemaForSAPCLOUDPORTALNamespace;
    'sap.gui'?: JSONSchemaForSAPGUINamespace;
    'sap.integration'?: JSONSchemaForSAPINTEGRATIONNamespace;
    'sap.wcf'?: JSONSchemaForSAPWCFNamespace;
    'sap.ui.smartbusiness.app'?: JSONSchemaForSAPUISMARTBUSINESSAPPNamespace;
    'sap.mobile'?: JSONSchemaForSAPMOBILENamespace;
    'sap.copilot'?: JSONSchemaForSAPCOPILOTNamespace;
    'sap.map'?: JSONSchemaForSAPMAPNamespace;
    'sap.url'?: JSONSchemaForSAPURLNamespace;
    'sap.platform.sfsf'?: JSONSchemaForSAPPLATFORMSFSFNamespace;
    'sap.cloud'?: JSONSchemaForSAPCLOUDNamespace;
    'sap.card'?: JSONSchemaForSAPCARDNamespace;
    'sap.package'?: JSONSchemaForSAPPACKAGENamespace;
    'sap.artifact'?: JSONSchemaForSAPARTIFACTNamespace;
}
/**
 * Represents general application attributes
 */
export interface JSONSchemaForSAPAPPNamespace {
    /**
     * Application attributes format version. It is managed by namespace owner
     */
    _version?:
        | '1.1.0'
        | '1.2.0'
        | '1.3.0'
        | '1.4.0'
        | '1.5.0'
        | '1.6.0'
        | '1.7.0'
        | '1.8.0'
        | '1.9.0'
        | '1.10.0'
        | '1.11.0'
        | '1.12.0'
        | '1.13.0'
        | '1.14.0'
        | '1.15.0'
        | '1.16.0'
        | '1.17.0';
    /**
     * Represents the template from which the app was generated
     */
    sourceTemplate?: {
        /**
         * Represents id of the template from which the app was generated
         */
        id: string;
        /**
         * Represents the version of the template from which the app was generated
         */
        version: string;
        [k: string]: unknown;
    };
    /**
     * Represents mandatory unique app identifier which must correspond to component 'id/namespace'
     */
    id: string;
    /**
     * Represents type of an application and can be application or component or library
     */
    type: 'application' | 'component' | 'library' | 'card';
    /**
     * Represents path inside the app to the properties file containing text symbols for the Descriptor or properties file specific settings (including supportedLocales, fallbackLocale, terminologies and enhanceWith)
     */
    i18n?:
        | string
        | {
              /**
               * Represents the alternative for bundleUrl
               */
              bundleName: string;
              /**
               * Represents the fallback locale
               */
              fallbackLocale?: string;
              /**
               * Represents the list of supported locales
               */
              supportedLocales?: unknown[];
              /**
               * Represents terminologies with additional properties files
               */
              terminologies?: {
                  [k: string]: TerminologySetting;
              };
              /**
               * Represents enhancement of UI5 resource model with additional properties files
               */
              enhanceWith?: (
                  | {
                        /**
                         * Represents property url for model enhancement
                         */
                        bundleUrl: string;
                        /**
                         * Indicates whether url is relative to component (default) or manifest
                         */
                        bundleUrlRelativeTo?: 'manifest' | 'component';
                        /**
                         * Represents the fallback locale
                         */
                        fallbackLocale?: string;
                        /**
                         * Represents the list of supported locales
                         */
                        supportedLocales?: unknown[];
                        /**
                         * Represents terminologies with additional properties files
                         */
                        terminologies?: {
                            [k: string]: TerminologySetting;
                        };
                    }
                  | {
                        /**
                         * Represents the alternative for bundleUrl
                         */
                        bundleName: string;
                        /**
                         * Represents the fallback locale
                         */
                        fallbackLocale?: string;
                        /**
                         * Represents the list of supported locales
                         */
                        supportedLocales?: unknown[];
                        /**
                         * Represents terminologies with additional properties files
                         */
                        terminologies?: {
                            [k: string]: TerminologySetting;
                        };
                    }
              )[];
          }
        | {
              /**
               * Represents the URL for the resource bundle
               */
              bundleUrl: string;
              /**
               * Indicates whether url is relative to component (default) or manifest
               */
              bundleUrlRelativeTo?: 'manifest' | 'component';
              /**
               * Represents the list of supported locales
               */
              supportedLocales?: unknown[];
              /**
               * Represents the fallback locale
               */
              fallbackLocale?: string;
              /**
               * Represents terminologies with additional properties files
               */
              terminologies?: {
                  [k: string]: TerminologySetting;
              };
              /**
               * Represents enhancement of UI5 resource model with additional properties files
               */
              enhanceWith?: (
                  | {
                        /**
                         * Represents property url for model enhancement
                         */
                        bundleUrl: string;
                        /**
                         * Indicates whether url is relative to component (default) or manifest
                         */
                        bundleUrlRelativeTo?: 'manifest' | 'component';
                        /**
                         * Represents the fallback locale
                         */
                        fallbackLocale?: string;
                        /**
                         * Represents the list of supported locales
                         */
                        supportedLocales?: unknown[];
                        /**
                         * Represents terminologies with additional properties files
                         */
                        terminologies?: {
                            [k: string]: TerminologySetting;
                        };
                    }
                  | {
                        /**
                         * Represents the alternative for bundleUrl
                         */
                        bundleName: string;
                        /**
                         * Represents the fallback locale
                         */
                        fallbackLocale?: string;
                        /**
                         * Represents the list of supported locales
                         */
                        supportedLocales?: unknown[];
                        /**
                         * Represents terminologies with additional properties files
                         */
                        terminologies?: {
                            [k: string]: TerminologySetting;
                        };
                    }
              )[];
          };
    /**
     * Represents mandatory version of the app
     */
    applicationVersion: {
        version: Version;
        [k: string]: unknown;
    };
    /**
     * Represents array of relative paths to the nested manifest.json's (mandatory if it contains nested 'manifest.json')
     */
    embeds?: string[];
    /**
     * Represents relative path back to the manifest.json of an embedding component or library (mandatory for nested 'manifest.json')
     */
    embeddedBy?: string;
    /**
     * Represents a title (mandatory); to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    title: string;
    /**
     * Represents a subtitle to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    subTitle?: string;
    /**
     * Represents a shorter version of the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    shortTitle?: string;
    /**
     * Represents additional information to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    info?: string;
    /**
     * Represents a description; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    description?: string;
    /**
     * Represents array of keywords
     */
    tags?: {
        keywords: Tag;
        technicalAttributes?: string[];
        [k: string]: unknown;
    };
    /**
     * Represents application component hierarchy
     */
    ach?: string;
    /**
     * Represents used data sources with a unique key/alias
     */
    dataSources?: {
        [k: string]: DataSource;
    };
    /**
     * Represents array of directly used CDS views, which only to be added if directly used via INA protocol and not if used via OData service
     */
    cdsViews?: string[];
    /**
     * Represents reference to a file (naming convention is resources.json) which contains list with all resources which the app needs
     */
    resources?: 'resources.json';
    /**
     * Represents a system alias
     */
    destination?: {
        /**
         * Represents an alias for the system
         */
        name: string;
    };
    /**
     * Represents a collection of directly used open source libs (not when used via UI5 capsulation)
     */
    openSourceComponents?: OpenSource[];
    /**
     * Represents the name of the provider which owns the application
     */
    provider?: 'sfsf';
    /**
     * Represents indicator whether the app is running offline. Possible values are true or false (default)
     */
    offline?: boolean;
    /**
     * Represents cross navigation for inbound and outbound targets
     */
    crossNavigation?: {
        /**
         * Represents scopes of a site
         */
        scopes?: {
            /**
             * Represents unique id of the site
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[a-zA-Z0-9_\.\-]+$".
             */
            [k: string]: {
                value: string;
                [k: string]: unknown;
            };
        };
        /**
         * Represents cross navigation for inbound target
         */
        inbounds: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[\w\.\-]+$".
             */
            [k: string]: {
                /**
                 * Represents semantic object
                 */
                semanticObject: string;
                /**
                 * Represents action an the semantic object
                 */
                action: string;
                /**
                 * Indicates to not expose this inbound as a tile or link
                 */
                hideLauncher?: boolean;
                /**
                 * Represents icon
                 */
                icon?: string;
                /**
                 * Represents a title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
                 */
                title?: string;
                /**
                 * Represents a subtitle; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
                 */
                subTitle?: string;
                /**
                 * Represents a shorter version of the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
                 */
                shortTitle?: string;
                /**
                 * Represents additional information to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
                 */
                info?: string;
                /**
                 * Represents the display mode of the tile
                 */
                displayMode?: 'ContentMode' | 'HeaderMode';
                /**
                 * Represents data source
                 */
                indicatorDataSource?: {
                    dataSource: string;
                    path: string;
                    /**
                     * Represents refresh interval
                     */
                    refresh?: number;
                    [k: string]: unknown;
                };
                /**
                 * Represents device types for which application is developed
                 */
                deviceTypes?: {
                    /**
                     * Represents indicator whether desktop device is supported, default true
                     */
                    desktop?: boolean;
                    /**
                     * Represents indicator whether tablet device is supported, default true
                     */
                    tablet?: boolean;
                    /**
                     * Represents indicator whether phone device is supported, default true
                     */
                    phone?: boolean;
                };
                signature?: SignatureDef;
            };
        };
        /**
         * Describes intents that can be triggered from the application to navigate
         */
        outbounds?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[\w\.\-]+$".
             */
            [k: string]: {
                /**
                 * Represents a business entity (e.g., 'Employee')
                 */
                semanticObject: string;
                /**
                 * Represents the action to perform on the business entity (e.g., 'display')
                 */
                action: string;
                /**
                 * Indicates whether the intent can contain additional context parameters that are not described in the outbound: ('notallowed': the intent must contain only the specified parameters | 'allowed': additional parameters might appear in the navigation intent)| 'ignored': technical meta-parameters for framework usage are added to the intent, these parameters should be ignored by target applications
                 */
                additionalParameters?: 'notallowed' | 'ignored' | 'allowed';
                /**
                 * Represents parameters of navigation intents
                 */
                parameters?: {
                    /**
                     * This interface was referenced by `undefined`'s JSON-Schema definition
                     * via the `patternProperty` "^[\w\.\-\/]+$".
                     */
                    [k: string]: {
                        /**
                         * Describes parameters of navigation intents generated or triggered by the application
                         */
                        value?: {
                            /**
                             * Represents a verbatim value (when 'plain' format is used), a pattern (when 'regexp' format is used), a value coming from a UI5 model (when 'binding' format is used), or a User Default reference (when 'reference' format is used)
                             */
                            value?: string;
                            /**
                             * Indicates how 'value' is to be interpreted: 'plain': the 'value' is taken as a literal string value | 'reference': the 'value' is a reference to a parameter maintained in the Fiori Launchpad (e.g. 'UserDefault.CostCenter'); the parameter value is used on the outbound intent parameter| 'regexp': the 'value' matches the specified pattern| 'binding': the 'value' is a binding path; the value from the model at the specified binding path will be used on the outbound intent parameter
                             */
                            format?: 'plain' | 'regexp' | 'reference' | 'binding';
                        };
                        required?: boolean;
                    };
                };
            };
        };
        [k: string]: unknown;
    };
}
export interface DataSourceEnum {
    /**
     * Represents uri of the data source
     */
    uri: string;
    /**
     * Represents type of the data source. The supported types are OData, ODataAnnotation, INA, XML, JSON, FHIR, WebSocket, http
     */
    type?: 'OData' | 'ODataAnnotation' | 'INA' | 'XML' | 'JSON' | 'FHIR' | 'WebSocket' | 'http';
    /**
     * Represents data source type specific attributes (key, value pairs)
     */
    settings?: {
        /**
         * Represents version of OData: 2.0 is default
         */
        odataVersion?: '2.0' | '4.0';
        /**
         * Represents path to local meta data document or annotation uri
         */
        localUri?: string;
        /**
         * Represents  array of annotation which references an existing data source of type ODataAnnotation
         */
        annotations?: string[];
        /**
         * Indicates that the client is unwilling to accept a response whose age is greater than the number of seconds specified in this field
         */
        maxAge?: number;
        /**
         * Dictionary of (catalog) objects offered by the datasource
         */
        objects?: {
            /**
             * A (catalog) object of an InA DataSource
             */
            [k: string]: {
                objectName: ObjectName;
                objectType: ObjectType;
                packageName?: string;
                schemaName?: string;
            };
        };
        [k: string]: unknown;
    };
    customType?: false;
}
export interface DataSourceCustom {
    /**
     * Represents the uri of the data source, should always be given in lower case
     */
    uri: string;
    /**
     * Represents type of the data source. The supported types are OData, ODataAnnotation, INA, XML, JSON, FHIR, WebSocket, http
     */
    type?: string;
    /**
     * Represents data source type specific attributes (key, value pairs)
     */
    settings?: {
        /**
         * Represents version of OData: 2.0 is default
         */
        odataVersion?: '2.0' | '4.0';
        /**
         * Represents path to local meta data document or annotation uri
         */
        localUri?: string;
        /**
         * Represents  array of annotation which references an existing data source of type ODataAnnotation
         */
        annotations?: string[];
        /**
         * Indicates that the client is unwilling to accept a response whose age is greater than the number of seconds specified in this field
         */
        maxAge?: number;
        /**
         * Dictionary of (catalog) objects offered by the datasource
         */
        objects?: {
            /**
             * A (catalog) object of an InA DataSource
             */
            [k: string]: {
                objectName: ObjectName;
                objectType: ObjectType;
                packageName?: string;
                schemaName?: string;
            };
        };
        [k: string]: unknown;
    };
    /**
     * Represents a custom data source type flag. So the type can be any string if its true, and only enum values if false
     */
    customType: true;
}
export interface OpenSource {
    /**
     * Represents a name of the open source as appears on the web
     */
    name: string;
    /**
     * Represents a version of the open source (if part of app, version must be specified, if part of UI5 dist layer, version is empty)
     */
    version?: string;
    /**
     * Indicates, whether it is part of the app or not
     */
    packagedWithMySelf?: boolean;
}
/**
 * Represents signature for inbound targets
 */
export interface SignatureDef {
    parameters: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[\w\.\-\/]+$".
         */
        [k: string]: {
            /**
             *  Represents a default Value
             */
            defaultValue?:
                | {
                      format?: 'plain';
                      value?: string;
                      [k: string]: unknown;
                  }
                | {
                      format?: 'reference';
                      value?: string;
                      [k: string]: unknown;
                  }
                | {
                      format?: null;
                      value?: string;
                      [k: string]: unknown;
                  };
            /**
             * Represents a filter , only if input parameter matches filter
             */
            filter?: {
                /**
                 * Represents a depending on format either a verbatim filter value, a regular expression or a reference
                 */
                value: string;
                /**
                 * Indicates how 'value' is to be interpreted: ('plain': the actual value must match the 'value' property directly| 'regexp': the 'value' represents a regexp which must be present in the actual value| 'reference' : the 'value' represents a reference to e.g. a UserDefault parameter (e.g. 'UserDefault.CostCenter'), the resolved parameter value is then directly compared with the actual value)
                 */
                format?: 'plain' | 'regexp' | 'reference';
            };
            /**
             *  Represents a value to be used when creating a tile intent for this inbound
             */
            launcherValue?: {
                value?: string | string[];
                /**
                 * Indicates how 'value' is to be interpreted: 'plain': the 'value' is taken as a literal string value | 'array': the 'value' is an array of strings
                 */
                format?: 'plain' | 'array';
                /**
                 * DEPRECATED - Indicates the administrator should be prompted to supply a value when creating a tile
                 */
                prompt?: boolean;
            };
            required?: boolean;
            /**
             * Represents the parameter name in legacy ABAP application, e.g. 'RF05L-BUKRS' for parameter 'CompanyCode'
             */
            renameTo?: string;
        };
    };
    /**
     * Indicates how additional parameters to the declared signature are treated: ('ignored': parameters are not passed on to application | 'allowed': parameters are passed on to application | 'notallowed': additional parameters are not allowed)
     */
    additionalParameters: 'ignored' | 'allowed' | 'notallowed';
}
/**
 * Represents general ui attributes
 */
export interface JSONSchemaForSAPUINamespace {
    /**
     * Represents UI attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0' | '1.3.0' | '1.4.0' | '1.5.0';
    /**
     * Represents UI technology. The possible values are UI5 (default), WDA, NWBC, GUI, URL and WCF
     */
    technology: 'UI5' | 'WDA' | 'NWBC' | 'GUI' | 'URL' | 'WCF';
    /**
     * Represents icons which used in application
     */
    icons?: {
        /**
         * Represents icon of the app
         */
        icon?: string;
        /**
         * Represents ICO file to be used inside the browser and for desktop shortcuts
         */
        favIcon?: string;
        /**
         * Represents 57x57 pixel version for non-retina iPhones
         */
        phone?: string;
        /**
         * Represents 114x114 pixel version for non-retina iPhones
         */
        'phone@2'?: string;
        /**
         * Represents 72x72 pixel version for non-retina iPads
         */
        tablet?: string;
        /**
         * Represents 144x144 pixel version for non-retina iPads
         */
        'tablet@2'?: string;
    };
    /**
     * Represents device types on which application is running. Supported device types are desktop, tablet and phone
     */
    deviceTypes: DeviceType & {
        [k: string]: unknown;
    };
    /**
     * The property is Deprecated. Represents array of supported SAP themes such as sap_hcb, sap_bluecrystal
     */
    supportedThemes?: string[];
    /**
     * Indicates whether app should run in full screen mode: possible values: true or false
     */
    fullWidth?: boolean;
    [k: string]: unknown;
}
/**
 * Represents device types on which the app is running
 */
export interface DeviceType {
    /**
     * Represents indicator whether desktop device is supported, default true
     */
    desktop?: boolean;
    /**
     * Represents indicator whether tablet device is supported, default true
     */
    tablet?: boolean;
    /**
     * Represents indicator whether phone device is supported, default true
     */
    phone?: boolean;
}
/**
 * Represents component name for usage
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.]*$".
 */
export interface ComponentUsages {
    /**
     * Represents name of reuse component
     */
    name: string;
    /**
     * Represents component data for the Component
     */
    componentData?:
        | string[]
        | string
        | boolean
        | number
        | {
              [k: string]: unknown;
          };
    /**
     * Represents settings for the Component
     */
    settings?:
        | string[]
        | string
        | boolean
        | number
        | {
              [k: string]: unknown;
          };
    /**
     * Represents Indicator to lazy loading component usage, default true
     */
    lazy?: boolean;
}
/**
 * Represents sapui5 library name
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^([a-z][a-z0-9]{0,39})(\.[a-z][a-z0-9]{0,39})*$".
 */
export interface Lib {
    /**
     * Represents minimal version of ui5 library
     */
    minVersion?: string;
    /**
     * Represents Indicator to lazy loading lib
     */
    lazy?: boolean;
    [k: string]: unknown;
}
/**
 * Represents sapui5 component name
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^([a-zA-Z_$][a-zA-Z0-9_$]{0,39}\.)*([a-zA-Z_$][a-zA-Z0-9_$]{0,39})$".
 */
export interface Component {
    /**
     * Represents minimal version of ui5 component
     */
    minVersion?: string;
    /**
     * Represents Indicator to lazy loading component
     */
    lazy?: boolean;
    [k: string]: unknown;
}
/**
 * Represents sapui5 model name
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-\|@]*$".
 */
export interface Model {
    /**
     * Represents model class name
     */
    type?: string;
    /**
     * Represents string of key/alias from sap.app dataSources to reference an existing data source
     */
    dataSource?: string;
    /**
     * Represents URI for the model
     */
    uri?: string;
    /**
     * Indicates that the model will be immediately created after the manifest is loaded by Component Factory and before the Component instance is created
     */
    preload?: boolean;
    settings?: Ui5Setting;
}
export interface Ui5Setting {
    /**
     * Represents default binding mode and must be a string value from sap.ui.model.BindingMode. Possible values: Default, OneTime, OneWay, TwoWay
     */
    defaultBindingMode?: 'Default' | 'OneTime' | 'OneWay' | 'TwoWay';
    /**
     * Represents the alternative for bundleUrl
     */
    bundleName?: string;
    /**
     * Represents the URL for the resource bundle
     */
    bundleUrl?: string;
    /**
     * Indicates whether url is relative to component (default) or manifest
     */
    bundleUrlRelativeTo?: 'manifest' | 'component';
    /**
     * Represents the fallback locale
     */
    fallbackLocale?: string;
    /**
     * Represents the list of supported locales
     */
    supportedLocales?: unknown[];
    /**
     * Represents terminologies with additional properties files
     */
    terminologies?: {
        [k: string]: unknown;
    };
    /**
     * Represents enhancement of UI5 resource model with additional properties files
     */
    enhanceWith?: (
        | {
              /**
               * Represents property url for model enhancement
               */
              bundleUrl: string;
              /**
               * Indicates whether url is relative to component (default) or manifest
               */
              bundleUrlRelativeTo?: 'manifest' | 'component';
              /**
               * Represents the fallback locale
               */
              fallbackLocale?: string;
              /**
               * Represents the list of supported locales
               */
              supportedLocales?: unknown[];
              /**
               * Represents terminologies with additional properties files
               */
              terminologies?: {
                  [k: string]: TerminologySetting;
              };
          }
        | {
              /**
               * Represents the alternative for bundleUrl
               */
              bundleName: string;
              /**
               * Represents the fallback locale
               */
              fallbackLocale?: string;
              /**
               * Represents the list of supported locales
               */
              supportedLocales?: unknown[];
              /**
               * Represents terminologies with additional properties files
               */
              terminologies?: {
                  [k: string]: TerminologySetting;
              };
          }
    )[];
    [k: string]: unknown;
}
/**
 * Represents the definition of each service
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "[\s\S]*".
 */
export interface Service {
    /**
     * Represents the name of the service factory
     */
    factoryName: string;
    /**
     * Indicates whether the service optional or not
     */
    optional?: boolean;
    [k: string]: unknown;
}
/**
 * Represents a UI5 shortcut command.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z_][A-Za-z0-9_\-\|@]+$".
 */
export interface Command {
    /**
     * A string describing a shortcut key combination that, when used by the user, will trigger the command.
     */
    shortcut?: string;
}
/**
 * Represents the configuration of routing
 */
export interface RoutingFlexEnabled {
    /**
     * Represents the default properties defined for route and target
     */
    config?: {
        /**
         * Represents the router class
         */
        routerClass?: string;
        /**
         * Indicates whether the Views in routing are loaded asyncly
         */
        async?: boolean;
        /**
         * Represents information about targets to display when no route is matched
         */
        bypassed?: {
            /**
             * Represents one or multiple names of targets that are displayed when no route is matched
             */
            target: [] | [string | RouteTargetObject] | string | RouteTargetObject;
        };
        /**
         * Represents a prefix that is prepended in front of the viewName
         */
        viewPath?: string;
        [k: string]: unknown;
    } & Target;
    routes?:
        | Route[]
        | {
              [k: string]: RouteWithoutName;
          };
    /**
     * Represents the definition of targets
     */
    targets?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "[\s\S]*".
         */
        [k: string]:
            | (Target & {
                  /**
                   * Represents the name of a view that will be created
                   */
                  viewName: string;
                  /**
                   * Represents the id of the created view
                   */
                  viewId: string;
                  /**
                   * Represents a prefix that is prepended in front of the viewName
                   */
                  viewPath?: string;
                  [k: string]: unknown;
              })
            | (Target &
                  (
                      | {
                            /**
                             * Represents the name of a view or component that will be created
                             */
                            name: string;
                            /**
                             * Represents the id of the created view or component
                             */
                            id: string;
                            /**
                             * Represents a prefix that is prepended in front of the view or component name
                             */
                            path?: string;
                            /**
                             * Represents the type of the type View or Component
                             */
                            type?: 'View' | 'Component';
                            [k: string]: unknown;
                        }
                      | {
                            /**
                             * Represents the componentUsage of the component that will be created
                             */
                            usage: string;
                            /**
                             * Represents the id of the created view or component
                             */
                            id: string;
                            /**
                             * Represents the type of the type Component
                             */
                            type: 'Component';
                            [k: string]: unknown;
                        }
                  ));
    };
    [k: string]: unknown;
}
/**
 * Represents the definition of a target of a route as object.
 */
export interface RouteTargetObject {
    /**
     * Represents the name of the routing target
     */
    name?: string;
    /**
     * The prefix of the routing target
     */
    prefix?: string;
    /**
     * Indicates whether this 'Component' target should propagate it's title to this component or not
     */
    propagateTitle?: boolean & string;
    [k: string]: unknown;
}
/**
 * Represents the definition of each target
 */
export interface Target {
    /**
     * Represents the information which is included as a parameter of the 'titleChanged' event fired on Router when this target is displayed. The title can be set with static text and can also be set with a valid property binding syntax which will be resolved under the scope of the view in the target where the title property is defined.
     */
    title?: string;
    /**
     * Represents the type of view that is going to be created
     */
    viewType?: 'XML' | 'JSON' | 'JS' | 'HTML' | 'Template';
    /**
     * Represents the id of the view that contains the control specified by the 'controlId'
     */
    targetParent?: string;
    /**
     * Represents the id of the control where you want to place the view created by the target
     */
    controlId?: string;
    /**
     * Represents the name of an aggregation of the controlId that contains the views
     */
    controlAggregation?: string;
    /**
     * Whether the aggregation of the control should be cleared before adding the view
     */
    clearControlAggregation?: boolean;
    /**
     * Represents the name of another target which will also be displayed once this target is displayed
     */
    parent?: string;
    /**
     * Represents the level of the current view which is used to define the transition direction when navigate to this view
     */
    viewLevel?: number;
    /**
     * Represents the type of transition when navigating from previous view to this view
     */
    transition?: string | ('slide' | 'flip' | 'fade' | 'show');
    /**
     * Represents the transition parameters that are passed to the event handlers
     */
    transitionParameters?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * Represents the definition of route without the option 'name'. This is used when routes are defined in an object.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "[\s\S]*".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "[\s\S]*".
 */
export interface RouteWithoutName {
    /**
     * Represents the url pattern that the route is matched against
     */
    pattern?: string;
    /**
     * Whether the route should be matched when another route is already matched
     */
    greedy?: boolean;
    /**
     * Represents one or multiple names of targets which are displayed when the route is matched
     */
    target?: [] | [string | RouteTargetObject] | string | RouteTargetObject;
    /**
     * Represents the name of the target where the 'title' information should be taken
     */
    titleTarget?: string;
    [k: string]: unknown;
}
/**
 * Represents the root view definition when flex is enabled (requires a view id)
 */
export interface RootViewDefFlexEnabled {
    /**
     * Represents the name of the view
     */
    viewName: string;
    /**
     * Represents the type of the view. Possible Values: XML, JSON, JS, HTML, Template
     */
    type?: 'XML' | 'JSON' | 'JS' | 'HTML' | 'Template';
    /**
     * Represents the id of the view
     */
    id: string;
    /**
     * Configure the targets for asynchronous loading
     */
    async?: boolean;
    [k: string]: unknown;
}
/**
 * Represents the configuration of routing
 */
export interface Routing {
    /**
     * Represents the default properties defined for route and target
     */
    config?: {
        /**
         * Represents the router class
         */
        routerClass?: string;
        /**
         * Indicates whether the Views in routing are loaded asyncly
         */
        async?: boolean;
        /**
         * Indicates whether the targets which have type 'Component' should propagate their title to this component or not
         */
        propagateTitle?: boolean;
        /**
         * Represents information about targets to display when no route is matched
         */
        bypassed?: {
            /**
             * Represents one or multiple names of targets that are displayed when no route is matched
             */
            target: [] | [string | RouteTargetObject] | string | RouteTargetObject;
        };
        /**
         * Represents a prefix that is prepended in front of the viewName
         */
        viewPath?: string;
        [k: string]: unknown;
    } & Target;
    routes?:
        | Route[]
        | {
              [k: string]: RouteWithoutName;
          };
    /**
     * Represents the definition of targets
     */
    targets?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "[\s\S]*".
         */
        [k: string]:
            | (Target & {
                  /**
                   * Represents the name of a view that will be created
                   */
                  viewName: string;
                  /**
                   * Represents the id of the created view
                   */
                  viewId?: string;
                  /**
                   * Represents a prefix that is prepended in front of the viewName
                   */
                  viewPath?: string;
                  [k: string]: unknown;
              })
            | (Target &
                  (
                      | {
                            /**
                             * Represents the name of a view or component that will be created
                             */
                            name: string;
                            /**
                             * Represents the id of the created view or component
                             */
                            id?: string;
                            /**
                             * Represents a prefix that is prepended in front of the view or component name
                             */
                            path?: string;
                            /**
                             * Represents the type of the type View or Component
                             */
                            type?: 'View' | 'Component';
                            [k: string]: unknown;
                        }
                      | {
                            /**
                             * Represents the componentUsage of the component that will be created
                             */
                            usage: string;
                            /**
                             * Represents the id of the created view or component
                             */
                            id?: string;
                            /**
                             * Represents the type of the type Component
                             */
                            type: 'Component';
                            [k: string]: unknown;
                        }
                  ));
    };
    [k: string]: unknown;
}
/**
 * Represents ABAP platform specific attributes
 */
export interface JSONSchemaForSAPPLATFORMABAPNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents the uri of the app in the ABAP system
     */
    uri?: string;
    /**
     * Represents the alternative uri of the app in the ABAP system for starting the application
     */
    uriNwbc?: string;
}
/**
 * Represents HANA Cloud Platform platform specific attributes
 */
export interface JSONSchemaForSAPPLATFORMHCPNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0' | '1.3.0';
    /**
     * Represents the uri of the app in the HANA Cloud Platform
     */
    uri?: string;
    /**
     * Represents the alternative uri of the app in the ABAP system for starting the application
     */
    uriNwbc?: string;
    /**
     * Represents the provider account of the HTML5 application
     */
    providerAccount?: string;
    /**
     * Represents the HTML5 application name
     */
    appName?: string;
    /**
     * Represents the version of the HTML5 application
     */
    appVersion?: string;
    /**
     * Indicates that HCP application is multi-version enabled
     */
    multiVersionApp?: boolean;
}
/**
 * Represents CF(Cloud Foundry) platform specific attributes
 */
export interface JSONSchemaForSAPPLATFORMCFNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents the authorization scope of the application
     */
    oAuthScopes?: string[];
    [k: string]: unknown;
}
/**
 * Represents Mobile Cards platform specific attributes
 */
export interface JSONSchemaForSAPPLATFORMMOBILECARDSNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0';
    /**
     * Represents the compatibility of this app with the Mobile Cards platform.
     */
    compatible?: boolean;
    [k: string]: unknown;
}
/**
 * Represents SAP Fiori  specific attributes
 */
export interface JSONSchemaForSAPFIORINamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents array of registration ids, i.e. for Fiori apps fiori id(s)
     */
    registrationIds: string[];
    /**
     * Represents architecture type of an application. The supported types are transactional or analytical or factsheet or reusecomponent or fpmwebdynpro or designstudio
     */
    archeType: 'transactional' | 'analytical' | 'factsheet' | 'reusecomponent' | 'fpmwebdynpro' | 'designstudio';
    /**
     * Indicator that app is an abstract (generic) app which may not be used directly, but needs to be specialized in the SAP Fiori launchpad content
     */
    abstract?: boolean;
}
/**
 * Represents GENERIC APP specific attributes
 */
export interface JSONSchemaForSAPUIGENERICAPPNamespace {
    _version?: '1.1.0' | '1.2.0' | '1.3.0' | '1.4.0' | '1.5.0';
    /**
     * Represents global settings for the application controller
     */
    settings?: {
        [k: string]: unknown;
    };
    /**
     * Represents one ore more pages of an application. UI5 routing is created from the definitions in this section
     */
    pages?:
        | PagesMap[]
        | {
              [k: string]: PagesMap;
          };
}

/**
 * Represents the settings specific to one component
 */
export interface ComponentSettingDef {
    [k: string]: unknown;
}
export interface EmbeddedComponent {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_.:-]+$".
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_.:-]+$".
     */
    [k: string]: {
        /**
         * Represents an unique id for the instance of the reuse component inside of the object page
         */
        id: string;
        /**
         * Represents the title for the content of the reuse component
         */
        title: string;
        /**
         * Represents an optional element binding  for the ComponentContainer that hosts the reuse component
         */
        binding?: string;
        /**
         * Represents a map to populate the API of the reuse component
         */
        settings?: {
            [k: string]: unknown;
        };
        /**
         * Flag, whether the embedded component should be hidden by default
         */
        hiddenByDefault?: {
            [k: string]: unknown;
        };
        /**
         * Represents group title of reuse components
         */
        groupTitle?: string;
        /**
         * Represents a section that behaves a leading section for the group
         */
        leadingSectionIdOrPath?: string;
        [k: string]: unknown;
    } & (
        | {
              /**
               * Represents the name of the reuse component
               */
              componentName: string;
              [k: string]: unknown;
          }
        | {
              /**
               * Represents the reference to the name of the componentUsages defined in sap.ui5/componentUsages
               */
              componentUsage: string;
              [k: string]: unknown;
          }
        | {
              embeddedComponents: EmbeddedComponent;
              [k: string]: unknown;
          }
    );
}
export interface ComponentPagesDef {
    [k: string]: PagesMap;
}
/**
 * This interface was referenced by `ComponentPagesDef`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]+[\|]?[a-zA-Z0-9_\.\-]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]+[\|]?[a-zA-Z0-9_\.\-]+$".
 */
export interface PagesMap {
    /**
     * Represents the navigation property that leads to this page. The navigation links of the previous page (the page that calls this one) are determined through this property
     */
    navigationProperty?: string;
    /**
     * Represents the entity set that defines either the aggregation or the root object of the component
     */
    entitySet?: string;
    /**
     * Represents the component and its settings that makes the page
     */
    component: {
        /**
         * The name of the component
         */
        name: string;
        /**
         * Switch to create a route for a list (aggregation) if true and routing for an entity if not set or false
         */
        list?: boolean;
        settings?: ComponentSettingDef;
    };
    /**
     * Represents the different navigation targets
     */
    navigation?: {
        /**
         * Represents an action triggered by the user on UI: the navigation to display an object
         */
        display?: {
            /**
             * Represents the path in the manifest to the target to which the navigation is bound
             */
            path: string;
            /**
             * Represents the pointer to a semantic object
             */
            target: string;
            /**
             * Represents the refresh strategies configured for external display navigation while coming back to the source app
             */
            refreshStrategyOnAppRestore?: {
                /**
                 * Represents the map of entity sets configured for refresh strategies
                 */
                entitySets?: {
                    [k: string]: unknown;
                };
            };
        };
        /**
         * Represents an action triggered by the user on UI: the navigation to create an object
         */
        create?: {
            /**
             * Represents the path in the manifest to the target to which the navigation is bound
             */
            path: string;
            /**
             * Represents the pointer to a semantic object
             */
            target: string;
            /**
             * Represents the refresh strategies configured for external display navigation while coming back to the source app
             */
            refreshStrategyOnAppRestore?: {
                /**
                 * Represents the map of entity sets configured for refresh strategies
                 */
                entitySets?: {
                    [k: string]: unknown;
                };
            };
        };
        /**
         * Represents an action triggered by the user on UI: the navigation to edit an object
         */
        edit?: {
            /**
             * Represents the path in the manifest to the target to which the navigation is bound
             */
            path: string;
            /**
             * Represents the pointer to a semantic object
             */
            target: string;
            /**
             * Represents the refresh strategies configured for external display navigation while coming back to the source app
             */
            refreshStrategyOnAppRestore?: {
                /**
                 * Represents the map of entity sets configured for refresh strategies
                 */
                entitySets?: {
                    [k: string]: unknown;
                };
            };
        };
    };
    /**
     * Represent reuse components that should be appended at the end of the template component
     */
    embeddedComponents?: EmbeddedComponent;
    /**
     * Represents the routing specification
     */
    routingSpec?: {
        /**
         * Represents the name of the route
         */
        routeName: string;
        /**
         * Represents the switch to indicate, that this route is not related to the OData service
         */
        noOData?: boolean;
        /**
         * Represents the binding string to indicate, how the page should be bound relative to the predecessor page or absolute
         */
        binding?: string;
        /**
         * Represents the the title to be shown on the page
         */
        headerTitle?: string;
        /**
         * Represents the URL pointing to an icon, that will be shown in the navigation menu additional to the title to represent the page
         */
        typeImageUrl?: string;
        /**
         * Represents the switch to indicate, whether this route is reached via a 1:1 navigation or a 1:n navigation
         */
        noKey?: boolean;
    };
    /**
     * Represents the component to be loaded inside the canvas if sap.suite.ui.generic.template.Canvas is used as component name, and its settings
     */
    implementingComponent?:
        | {
              /**
               * Represents the name of the component to be loaded inside the canvas
               */
              componentName: string;
              binding?: ComponentBindingDef;
              settings?: ComponentSettingDef;
              pages?: ComponentPagesDef;
          }
        | {
              /**
               * Represents the reference to the name of the componentUsages defined in sap.ui5/componentUsages for the component to be loaded inside the canvas
               */
              componentUsage: string;
              binding?: ComponentBindingDef;
              settings?: ComponentSettingDef;
              pages?: ComponentPagesDef;
          };
    /**
     * Default layout used to open the corresponding page in FlexibleColumnLayout
     */
    defaultLayoutType?: string;
    /**
     * Default layout used to open the corresponding page in FlexibleColumnLayout when reached via external navigation
     */
    defaultLayoutTypeIfExternalNavigation?: string;
    pages?: {
        [k: string]: PagesMap;
    };
}
/**
 * Represents specific attributes for Fiori Elements
 */
export interface JSONSchemaForSAPFENamespace {
    _version?: '1.1.0';
    /**
     * Collection of attributes related to forms in Fiori Elements v4
     */
    form?: {
        /**
         * Flag defining whether a property's text should be retrieved from a value help collection if there is no text at property level
         */
        retrieveTextFromValueList?: boolean & string;
    };
}
/**
 * Represents FLP specific attributes
 */
export interface JSONSchemaForSAPFLPNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0' | '1.3.0';
    /**
     * Represents size of the tile
     */
    tileSize?: '1x1' | '1x2';
    /**
     * Represents the type of FLP entry. It must be 'application' or 'tile' or 'plugin'
     */
    type: 'application' | 'tile' | 'plugin';
    /**
     * Represents configuration parameters of the FLP entry
     */
    config?: {
        /**
         * Represents the configuration key and values
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9\_\.\-]*$".
         */
        [k: string]: {
            [k: string]: unknown;
        };
    };
    /**
     * Represents the original tile and target mapping which resulted in this app
     */
    origin?: {
        /**
         * Represents the original tile which resulted in this app
         */
        tileId?: string;
        /**
         * Represents the original target mapping which resulted in this app
         */
        targetMappingId?: string;
    };
}
/**
 * Represents OVP specific attributes
 */
export interface JSONSchemaForSAPOVPNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0' | '1.3.0' | '1.4.0';
    /**
     * Represents the name of global filter OData model, which  contains entities definition that are relevant for global filters
     */
    globalFilterModel?: string;
    /**
     * Represents the entity to use as global filter in the smart filter bar control
     */
    globalFilterEntityType?: string;
    /**
     * Represents the entity set to use as global filter in the smart filter bar control
     */
    globalFilterEntitySet?: string;
    /**
     * Represents a switch to include basic search in the global filters
     */
    showBasicSearch?: boolean;
    /**
     * Represents a switch to disable the error page shown on load of overview page when no data is retreived from the backend
     */
    disableErrorPage?: boolean;
    /**
     * Represents a switch to activate smart variant management in the global filters
     */
    smartVariantRequired?: boolean;
    /**
     * Represents a switch to show smart filter bar in expanded or collapsed mode
     */
    bHeaderExpanded?: boolean;
    /**
     * Represents the layout of the card container
     */
    containerLayout?: 'fixed' | 'resizable';
    /**
     * Represents a switch to Enable or disable Relative or Normal date formating in ovp application
     */
    showDateInRelativeFormat?: boolean;
    /**
     * Represents a switch to Enable or Disable the Flexibility of Table cards
     */
    disableTableCardFlexibility?: boolean;
    /**
     * Represents the switch to activate live update in the global filters, else manual update will be required
     */
    enableLiveFilter?: boolean;
    /**
     * Flag to enable/disable analytical parameter support for Smart filter bar
     */
    considerAnalyticalParameters?: boolean;
    /**
     * Time interval in minutes to auto refresh the card models
     */
    refreshIntervalInMinutes?: number;
    /**
     * Flag to enable/disable semantic date range control for Smart filter bar
     */
    useDateRangeType?: boolean;
    /**
     * Represents the object to store analytical chart settings
     */
    chartSettings?: {
        /**
         * Flag to enable data labels on analytical charts
         */
        showDataLabel?: boolean;
        [k: string]: unknown;
    };
    cards: {
        [k: string]: Card;
    };
    resizableLayout?: {
        [k: string]: ResizableLayoutVariant;
    };
}
/**
 * Represents the card attributes
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]+$".
 */
export interface Card {
    /**
     * Represents the position of the card in the sequence
     */
    sequencePos?: number;
    /**
     * Represents the model for the card
     */
    model?: string;
    /**
     * Represents the card component path to use for this card
     */
    template: string;
    settings?: CardSetting;
    /**
     * Represents the card with view switch control
     */
    tabs?: [TabSetting, ...TabSetting[]];
}
/**
 * Represents the card specific properties - properties that are passed to the card
 */
export interface CardSetting {
    /**
     * Represents the category of the card- used in the card header
     */
    category?: string;
    /**
     * Represents the user defined string in placeholder card
     */
    itemText?: string;
    /**
     * Represents language-dependent title of the card - used in the card header
     */
    title: string;
    /**
     * Represents language-dependent subtitle of the card - used in the card header
     */
    subTitle?: string;
    /**
     * Represents things like people, number of items
     */
    valueSelectionInfo?: string;
    /**
     * Represents the entity set that will be displayed in this card
     */
    entitySet?: string;
    /**
     * Represents the static content that will be displayed in this card
     */
    staticContent?: {
        [k: string]: unknown;
    }[];
    /**
     * Represents the flavor of the list to use in this card. The flavor can be bar chart, carousel or standard
     */
    listFlavor?: 'standard' | 'bar' | 'carousel';
    /**
     * Represents the type of list to use for this card. The list can be extended to display more information or condensed to take up less space on the card
     */
    listType?: 'extended' | 'condensed';
    /**
     * Represents the sort key for the entity set
     */
    sortBy?: string;
    /**
     * Represents the sort order for the entity set
     */
    sortOrder?: 'ascending' | 'descending';
    /**
     * Represents the annotation path
     */
    annotationPath?: string;
    /**
     * Represents the selection annotation path
     */
    selectionAnnotationPath?: string;
    /**
     * Represents the chart annotation path
     */
    chartAnnotationPath?: string;
    /**
     * Represents the presentation annotation path
     */
    presentationAnnotationPath?: string;
    /**
     * Represents the data point annotation path
     */
    dataPointAnnotationPath?: string;
    /**
     * Represents the identification annotation path
     */
    identificationAnnotationPath?: string;
    /**
     * Represents the KPI annotation path
     */
    kpiAnnotationPath?: string;
    /**
     * Represents the selection presentation annotation path
     */
    selectionPresentationAnnotationPath?: string;
    /**
     * Represents the dynamic subtitle annotation path
     */
    dynamicSubtitleAnnotationPath?: string;
    /**
     * Represents the flag to indicate priority of number formatting over sap text
     */
    ignoreSapText?: boolean;
    defaultSpan?: DefaultSpanDef;
    /**
     * Represents the cards for which authorization is required
     */
    requireAppAuthorization?: string;
    objectStreamCardsSettings?: ObjectStreamCardsSettingsDef;
    /**
     * Represents the flag to indicate the use of object number/smart field
     */
    enableLocaleCurrencyFormatting?: boolean;
    /**
     * Represents the configuration to alter the navigation mode in OVP Analytical Cards
     */
    navigation?: 'dataPointNav' | 'chartNav' | 'headerNav' | 'noHeaderNav';
    /**
     * Represents a switch to Show or Hide Filters in Cards Headers in OVP application
     */
    showFilterInHeader?: boolean;
    /**
     * Represents a switch to Show or Hide Sorting in Cards Headers in OVP application
     */
    showSortingInHeader?: boolean;
    /**
     * Flag for enabling images in a condensed list card
     */
    imageSupported?: boolean;
    /**
     * Flag for show line item detail in list and table card
     */
    showLineItemDetail?: boolean;
    /**
     * This property is responsible for showing and hiding text labels on the geo spots
     */
    showLabelText?: boolean;
    /**
     * This property is responsible for passing custom parameters present in the entity set to the navigating application
     */
    customParams?: string;
    /**
     * This property is responsible for setting specific chart settings
     */
    chartProperties?: {
        plotArea?: PlotAreaDef;
        timeAxis?: TimeAxisDef;
    };
    /**
     * Represents the configuration to customize the column stacked chart
     */
    colorPalette?:
        | {
              [k: string]: unknown;
          }[]
        | {
              [k: string]: unknown;
          };
    [k: string]: unknown;
}
/**
 * Represents the Object Stream properties - properties that are passed to the Object Stream cards
 */
export interface ObjectStreamCardsSettingsDef {
    /**
     * Represents the flag to show first action in footer of the Quickview cards
     */
    showFirstActionInFooter?: boolean;
    /**
     * Represents the custom actions in the Quick View Cards
     */
    customActions?: [CustomActionsSetting, ...CustomActionsSetting[]];
    [k: string]: unknown;
}
/**
 * Represents the properties for the custom actions in the Quick View Cards
 */
export interface CustomActionsSetting {
    /**
     * Text displayed for extended actions in Quick View
     */
    text?: string;
    /**
     * Name of the press handler for extended actions in Quick View
     */
    press?: string;
    /**
     * Position of extended actions in Quick View
     */
    position?: number;
    [k: string]: unknown;
}
/**
 * Plot area is a parent property which defines multiple other properties for smoothness and marker size
 */
export interface PlotAreaDef {
    /**
     * Represents whether smoother curves are required or not
     */
    isSmoothed?: boolean;
    /**
     * Represents the size of the markers in scatter plots
     */
    markerSize?: number;
    /**
     * dataLabel is a parent property that defines other properties for type
     */
    dataLabel?: {
        /**
         * Defines whether to display percentage values or actual counts in the donut chart
         */
        type?: 'value' | 'percentage';
    };
}
/**
 * Represents the configuration to customize the time axis
 */
export interface TimeAxisDef {
    levels?: LevelsDef;
    [k: string]: unknown;
}
/**
 * Represents the tab specific properties - properties that are passed to a particular tab in a card
 */
export interface TabSetting {
    /**
     * Represents the annotation path
     */
    annotationPath?: string;
    /**
     * Represents the selection annotation path
     */
    selectionAnnotationPath?: string;
    /**
     * Represents the chart annotation path
     */
    chartAnnotationPath?: string;
    /**
     * Represents the presentation annotation path
     */
    presentationAnnotationPath?: string;
    /**
     * Represents the data point annotation path
     */
    dataPointAnnotationPath?: string;
    /**
     * Represents the identification annotation path
     */
    identificationAnnotationPath?: string;
    /**
     * Represents the dynamic subtitle annotation path
     */
    dynamicSubtitleAnnotationPath?: string;
    /**
     * Represents the drop down value to be shown
     */
    value?: string;
    /**
     * This property is responsible for setting specific chart settings
     */
    chartProperties?: {
        plotArea?: PlotAreaDef;
        timeAxis?: TimeAxisDef;
    };
    /**
     * Represents the configuration to customize the column stacked chart
     */
    colorPalette?:
        | {
              [k: string]: unknown;
          }[]
        | {
              [k: string]: unknown;
          };
    [k: string]: unknown;
}
/**
 * Represents the resizable layout variant
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^cols_[0-9]+$".
 */
export interface ResizableLayoutVariant {
    [k: string]: ResizableLayoutVariantCardProperties;
}
/**
 * Represents the card properties is a layout variant
 *
 * This interface was referenced by `ResizableLayoutVariant`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]+$".
 */
export interface ResizableLayoutVariantCardProperties {
    /**
     * Represents the grid column
     */
    col: number;
    /**
     * Represents the grid row
     */
    row: number;
    /**
     * Represents the column span
     */
    colSpan: number;
    /**
     * Represents the row span
     */
    rowSpan: number;
    /**
     * Represents the visibility of the card
     */
    visible?: boolean;
}
/**
 * Represents WDA specific attributes
 */
export interface JSONSchemaForSAPWDANamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents ID of an application
     */
    applicationId: string;
    /**
     * Represents ID of an application configuration
     */
    configId?: string;
    /**
     * Represents SAP Screen Personas Flavor ID
     */
    flavorId?: string;
    /**
     * Indicates that WebDynpro Application requires Compatibility Mode, while uses legacy shell services. Possible values are true or false (default)
     */
    compatibilityMode?: boolean;
}
/**
 * Represents APF specific attributes
 */
export interface JSONSchemaForSAPAPFNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents a switch to activate filter reduction so that filters in OData requests can be represented as ABAP select options
     */
    activateFilterReduction?: boolean;
    /**
     * Represents a switch to activate LREP as the persistence for configurations and texts
     */
    activateLrep?: boolean;
    /**
     * Represents a switch to use HEAD-Requests instead of GET-Requests when fetching the XSRF-Security-Token
     */
    useHeadRequestForXsrfToken?: boolean;
}
/**
 * Represents Cloud Portal specific attributes
 */
export interface JSONSchemaForSAPCLOUDPORTALNamespace {
    [k: string]: unknown;
}
/**
 * Represents GUI specific attributes
 */
export interface JSONSchemaForSAPGUINamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0' | '1.2.0';
    /**
     * Represents transaction of an application
     */
    transaction: string;
    /**
     * Represents SAP Screen Personas Flavor ID
     */
    flavorId?: string;
}
/**
 * Represents Application Integration specific attributes
 */
export interface JSONSchemaForSAPINTEGRATIONNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0';
    /**
     * Reference to the desired URL Template
     */
    urlTemplateId: string;
    /**
     * Represents configuration parameters which will be used by Template Engine to compile URL Template
     */
    parameters: {
        /**
         * Represents the name of the desired parameter
         */
        key: string;
        /**
         * Represents the actual value of the desired parameter
         */
        value: string;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}
/**
 * Represents WCF Application specific attributes
 */
export interface JSONSchemaForSAPWCFNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0';
    /**
     * Represents the target technical id for a WCF Application
     */
    'wcf-target-id': string;
}
/**
 * Represents specific attributes for Smart Business
 */
export interface JSONSchemaForSAPUISMARTBUSINESSAPPNamespace {
    [k: string]: unknown;
}
/**
 * Represents mobile specific attributes
 */
export interface JSONSchemaForSAPMOBILENamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.1.0';
    /**
     * Represents mobile specific attributes
     */
    definingRequests: {
        [k: string]: DefiningRequest;
    };
    [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_\.\-]*".
 */
export interface DefiningRequest {
    /**
     * Represents reference to dataSource under sap.app
     */
    dataSource: string;
    /**
     * Represents path to the title collection
     */
    path: string;
    /**
     * Represents indicator whether streams should be retrieved
     */
    retrieveStreams?: boolean;
}
/**
 * Represents specific attributes for SAP CoPilot
 */
export interface JSONSchemaForSAPCOPILOTNamespace {
    /**
     * Represents SAP.COPILOT attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0' | '1.1.0';
    /**
     * Settings for the context analysis features of SAP CoPilot
     */
    contextAnalysis?: {
        /**
         * Enable/Disable the ability for SAP CoPilot to analyze your Application Screens and add the found objects to a Collection
         */
        allowAddingObjectsFromAppScreenToCollection?: boolean;
        /**
         * A list of the whitelisted EntityTypes, prefixed with their namespace, that SAP CoPilot can display. The empty list is ignored, thus allowing all EntityTypes by default.
         */
        whitelistedEntityTypes?: string[];
        [k: string]: unknown;
    };
    /**
     * Settings for the Digital Assistant features of SAP CoPilot
     */
    digitalAssistant?: {
        /**
         * A list of Intent
         */
        intentDefinition?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[a-zA-Z0-9_\.\-]*$".
             */
            [k: string]: {
                /**
                 * Represents the uri of the intent
                 */
                uri?: string;
                /**
                 * A list of the sap.app.dataSources used by the intent
                 */
                dataSources?: string[];
                /**
                 * Represents the uri of the translation file
                 */
                i18n?: string;
                [k: string]: unknown;
            };
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * Represents specific attributes for SAP.MAP
 */
export interface JSONSchemaForSAPMAPNamespace {
    [k: string]: unknown;
}
/**
 * Represents specific attributes for SAP URL
 */
export interface JSONSchemaForSAPURLNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0';
    /**
     * Represents URI of an application
     */
    uri: string;
}
/**
 * Represents SFSF platform specific attributes
 */
export interface JSONSchemaForSAPPLATFORMSFSFNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0';
    /**
     * Represents the uri inside the SFSF app
     */
    uri?: string;
    /**
     * Represents the SFSF application name
     */
    appName: string;
    /**
     * Represents the version of the SFSF application
     */
    appVersion?: string;
}
/**
 * Represents cloud platform specific attributes
 */
export interface JSONSchemaForSAPCLOUDNamespace {
    /**
     * Represents attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0' | '1.1.0' | '1.2.0';
    /**
     * Unique Business Service Identifier
     */
    service?: string;
    /**
     * Specify if the UI can be accessed from a different space than origin development space
     */
    public?: boolean;
}
/**
 * Represents general package attributes. Experimental, will be detailed in the future
 */
export interface JSONSchemaForSAPPACKAGENamespace {
    /**
     * Represents SAP.PACKAGE attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0' | '1.1.0';
    /**
     * Represents mandatory unique package identifier
     */
    id: string;
    /**
     * Represents path inside the package to the properties file containing text symbols for the packages texts
     */
    i18n?: string;
    /**
     * Represents mandatory semantic version of the package information and optional the upgrade notification
     */
    packageVersion: {
        /**
         * Represents mandatory semantic version of the package
         */
        version: string;
        /**
         * Represents optional upgrade notification once the package is available. none - no notification, package will be installed automatically for any version. major - notification before a new major version is installed. major.minor - notification before a major and minor version is installed. all - notification before any new version is installed, including patches
         */
        upgradeNotification?: 'none' | 'major' | 'major.minor' | 'all';
        [k: string]: unknown;
    };
    /**
     * Represents type of an package and can be card, workflow, workspace-template
     */
    type?: 'card' | 'workflow' | 'workspace-template';
    /**
     * Represents a title (mandatory); to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    title: string;
    /**
     * Represents a subtitle to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    subTitle?: string;
    /**
     * Represents a shorter version of the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    shortTitle?: string;
    /**
     * Represents additional information to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    info?: string;
    /**
     * Represents a description; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    description: string;
    /**
     * Represents icon name or source URL for the package
     */
    icon?: string;
    /**
     * Represents array of keywords used to find the package
     */
    tags?: {
        keywords: Tag;
        technicalAttributes?: string[];
        [k: string]: unknown;
    };
    /**
     * Represents the support information
     */
    vendor: {
        /**
         * Represents the vendor id
         */
        id: string;
        /**
         * Represents the vendor name
         */
        name: string;
        /**
         * Represents the vendor line of business within the vendors organization if any
         */
        lineOfBusiness?: string;
        /**
         * Represents a target url
         */
        url: string;
        [k: string]: unknown;
    };
    /**
     * Represents the homepage information
     */
    homepage?: {
        /**
         * Represents a target url
         */
        url: string;
        /**
         * Represents a descriptive text for the target
         */
        text: string;
        [k: string]: unknown;
    };
    /**
     * Represents the support information
     */
    support: {
        /**
         * Represents a target url
         */
        url: string;
        /**
         * Represents a descriptive text for the target
         */
        text: string;
        [k: string]: unknown;
    };
    /**
     * Represents the documentation information
     */
    documentation?: {
        /**
         * Represents a target url
         */
        url: string;
        /**
         * Represents a descriptive text for the target
         */
        text: string;
        [k: string]: unknown;
    };
    contents?: {
        /**
         * Relative url to the artifact within the folder in this package
         */
        baseURL?: string;
        /**
         * Wraps the child manifest
         */
        manifest?: {
            /**
             * The artifacts manifest
             */
            'sap.artifact'?: {
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }[];
    /**
     * Represents list of product ids that are allowed to consume this package. if not defined all products that are capable of installing this package are allowed
     */
    consumption?: string[];
    /**
     * Represents the products and service that the pacakge depends on
     */
    dependencies?: {
        /**
         * List of products that this package depends on
         */
        products?: string[];
        /**
         * List of services that this package depends on
         */
        services?: string[];
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * Represents general artifact attributes.
 */
export interface JSONSchemaForSAPARTIFACTNamespace {
    /**
     * Represents SAP.ARTIFACT attributes format version. It is managed by namespace owner
     */
    _version?: '1.0.0' | '1.1.0';
    /**
     * Represents mandatory unique artifact identifier
     */
    id: string;
    /**
     * Represents path inside the artifact to the properties file containing text symbols for the artifacts texts
     */
    i18n?: string;
    /**
     * Represents mandatory semantic version of the artifact
     */
    artifactVersion: {
        version: Semanticversion;
        [k: string]: unknown;
    };
    /**
     * Represents type of an artifact and can be card, workflow, workspace-template
     */
    type: 'card' | 'workflow' | 'workspace-template';
    /**
     * Represents a title (mandatory); to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    title: string;
    /**
     * Represents a subtitle to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    subTitle?: string;
    /**
     * Represents a shorter version of the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    shortTitle?: string;
    /**
     * Represents additional information to the title; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    info?: string;
    /**
     * Represents a description; to make this property language dependent (recommended), use a key in double curly brackets '{{key}}'
     */
    description: string;
    /**
     * Represents icon name or source URL for the artifact
     */
    icon?: string;
    /**
     * Represents array of keywords used to find the artifact
     */
    tags?: {
        keywords: Tag;
        technicalAttributes?: string[];
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
