import { LogLevel } from "./LogLevel";
export declare class Logger {
    private name;
    private logLevel;
    constructor(name: string, logLevel: LogLevel);
    private print(logLevel, msg);
    trace(msg: string): void;
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    fatal(msg: string): void;
}
