import { LogLevel } from "./LogLevel";
export interface LogAppender {
    append(logLevel: LogLevel, name: string, msg: string): void;
}
