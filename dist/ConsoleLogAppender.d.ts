import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";
export declare class ConsoleAppender implements LogAppender {
    append(logLevel: LogLevel, name: string, msg: string): void;
}
