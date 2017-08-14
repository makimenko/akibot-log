import { LogRule } from "./LogRule";
import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";
export declare class LogFactory {
    private logRules;
    constructor(logRules: LogRule[]);
    getLoglevel(name: string): LogLevel;
    getLogger(name: string): Logger;
}
