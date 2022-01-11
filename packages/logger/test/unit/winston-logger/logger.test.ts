import 'jest-extended';
import { LogLevel, ToolsLogger, Transport } from '../../../src';
import { ConsoleTransport, NullTransport, VSCodeTransport } from '../../../src/transports';
import { NullTransport as WinstonNullTransport } from '../../../src/winston-logger/null-transport';
import { VSCodeTransport as WinstonVSCodeTransport } from '../../../src/winston-logger/vscode-output-channel-transport';
import winston from 'winston';

jest.mock(
    'vscode',
    () => {
        return {
            window: {
                createOutputChannel() {
                    return { appendLine: () => 0 };
                }
            }
        };
    },
    { virtual: true }
);

describe('Winston logger', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it('Uses a console transport by default', () => {
        const logger = new ToolsLogger();
        expect(logger.transports()).toIncludeSameMembers([new ConsoleTransport()]);
    });

    it('Console transport is only added once', () => {
        const logger = new ToolsLogger({
            transports: Array.from({ length: 500 }, () => new ConsoleTransport()),
            logLevel: LogLevel.Info
        });
        expect(logger.transports()).toIncludeSameMembers([new ConsoleTransport()]);
    });

    it('Null transport is only added once', () => {
        const logger = new ToolsLogger({
            transports: Array.from({ length: 500 }, () => new NullTransport()),
            logLevel: LogLevel.Info
        });
        expect(logger.transports()).toIncludeSameMembers([new NullTransport()]);
    });

    it('VS Code transport is only added once per channel', () => {
        const logger = new ToolsLogger({
            transports: Array.from({ length: 500 }, () => new VSCodeTransport({ channelName: 'sampleChannel' })),
            logLevel: LogLevel.Info
        });
        expect(logger.transports()).toIncludeSameMembers([new VSCodeTransport({ channelName: 'sampleChannel' })]);
    });

    it('Singleton transports (null, console, vscode) are only added once', () => {
        const transports = Array.from({ length: 500 }, (_, i) => {
            if (i % 10 === 0) {
                return new VSCodeTransport({ channelName: 'channel10' });
            } else if (i % 5 === 0) {
                return new VSCodeTransport({ channelName: 'channel5' });
            } else if (i % 2 === 0) {
                return new ConsoleTransport();
            } else {
                return new NullTransport();
            }
        }) as unknown as Transport[];

        const logger = new ToolsLogger({
            transports,
            logLevel: LogLevel.Info
        });
        expect(logger.transports()).toIncludeSameMembers([
            new NullTransport(),
            new ConsoleTransport(),
            new VSCodeTransport({ channelName: 'channel5' }),
            new VSCodeTransport({ channelName: 'channel10' })
        ]);
    });

    it('Will throw an error when typing to remove non-existent transport', () => {
        const logger = new ToolsLogger();
        expect(() => logger.remove(new NullTransport())).toThrow(/cannot remove non-existent transport/i);
    });

    it('Calls log method all of transports', () => {
        const consoleLog = jest.spyOn(winston.transports.Console.prototype, 'log').mockImplementation(() => 0);
        const nullLog = jest.spyOn(WinstonNullTransport.prototype, 'log').mockClear();
        const vscodeLog = jest.spyOn(WinstonVSCodeTransport.prototype, 'log').mockClear();
        const logger = new ToolsLogger({
            logLevel: LogLevel.Info,
            transports: [new ConsoleTransport(), new NullTransport(), new VSCodeTransport({ channelName: 'random' })]
        });
        logger.info('info message');
        expect(consoleLog).toBeCalledWith(
            expect.objectContaining({ level: 'info', message: 'info message' }),
            expect.any(Function)
        );
        expect(nullLog).toBeCalledWith(
            expect.objectContaining({ level: 'info', message: 'info message' }),
            expect.any(Function)
        );
        expect(vscodeLog).toBeCalledWith(
            expect.objectContaining({ level: 'info', message: 'info message' }),
            expect.any(Function)
        );
    });

    it('Calls log method of transport after dynamic addition', () => {
        const consoleLog = jest.spyOn(winston.transports.Console.prototype, 'log');
        const nullLog = jest.spyOn(WinstonNullTransport.prototype, 'log');
        const logger = new ToolsLogger({
            logLevel: LogLevel.Info,
            transports: [new ConsoleTransport()]
        });

        logger.warn('warning1');
        logger.add(new NullTransport());
        logger.error('error1');
        logger.debug('debug1'); // This will be ignored, logger has level Info and above

        expect(consoleLog).toBeCalledTimes(2);
        expect(consoleLog).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({ level: 'warn', message: 'warning1' }),
            expect.any(Function)
        );
        expect(consoleLog).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({ level: 'error', message: 'error1' }),
            expect.any(Function)
        );
        expect(nullLog).toBeCalledTimes(1);
        expect(nullLog).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({ level: 'error', message: 'error1' }),
            expect.any(Function)
        );
    });

    it('Does not call log method of transport after dynamic removal', () => {
        const consoleLog = jest.spyOn(winston.transports.Console.prototype, 'log');
        const nullLog = jest.spyOn(WinstonNullTransport.prototype, 'log');
        const logger = new ToolsLogger({
            logLevel: LogLevel.Debug,
            transports: [new ConsoleTransport(), new NullTransport()]
        });

        logger.warn('warning1');
        const nullTransport = logger.transports().find((t) => t instanceof NullTransport);
        expect(nullTransport).not.toBeUndefined;
        logger.remove(nullTransport!);
        logger.debug('debug1');

        expect(consoleLog).toBeCalledTimes(2);
        expect(consoleLog).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({ level: 'warn', message: 'warning1' }),
            expect.any(Function)
        );
        expect(consoleLog).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({ level: 'debug', message: 'debug1' }),
            expect.any(Function)
        );
        expect(nullLog).toBeCalledTimes(1);
        expect(nullLog).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({ level: 'warn', message: 'warning1' }),
            expect.any(Function)
        );
    });

    it('Does not call log method of transport if severity level is too low', () => {
        const nullLog = jest.spyOn(WinstonNullTransport.prototype, 'log');
        const logger = new ToolsLogger({
            logLevel: LogLevel.Error,
            transports: [new NullTransport()]
        });

        logger.warn('warning1');
        logger.info('info1');
        logger.error('error1');

        expect(nullLog).toBeCalledTimes(1);
        expect(nullLog).toHaveBeenCalledWith(
            expect.objectContaining({ level: 'error', message: 'error1' }),
            expect.any(Function)
        );
    });
});