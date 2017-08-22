import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";
export declare class ChromeLogAppender implements LogAppender {
    FgRed: string;
    FgYellow: string;
    Default: string;
    append(logLevel: LogLevel, name: string, msg: string): void;
}
