import { LogLevel } from "./LogLevel";
import { LogAppender } from "./LogAppender";
export declare class Logger {
    private name;
    private logLevel;
    private logAppender;
    constructor(name: string, logLevel: LogLevel, logAppender: LogAppender);
    private print(logLevel, msg);
    trace(msg: string): void;
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    fatal(msg: string): void;
}
