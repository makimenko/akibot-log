import { LogLevel } from "./LogLevel";
export interface LogRule {
    pattern: RegExp;
    logLevel: LogLevel;
}
