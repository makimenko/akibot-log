import { LogRule } from "./LogRule";
import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";
import { LogAppender } from "./LogAppender";
export declare class LogFactory {
    private logAppender;
    logRules: LogRule[];
    private loggers;
    constructor(logAppender: LogAppender, logRules: LogRule[]);
    getLoglevel(name: string): LogLevel;
    getLogger(name: string): Logger;
    updateLogRules(newLogRules: LogRule[]): void;
}
