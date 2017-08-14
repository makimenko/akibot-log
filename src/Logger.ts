import { LogLevel } from "./LogLevel";
import { LogAppender } from "./LogAppender";

export class Logger {

    constructor(private name: string, private logLevel: LogLevel, private logAppender: LogAppender) {

    }

    private print(logLevel: LogLevel, msg: string) {
        if (logLevel >= this.logLevel) {
            this.logAppender.append(logLevel, this.name, msg);
        }
    }

    public trace(msg: string) {
        this.print(LogLevel.Trace, msg);
    }

    public debug(msg: string) {
        this.print(LogLevel.Debug, msg);
    }

    public info(msg: string) {
        this.print(LogLevel.Info, msg);
    }

    public warn(msg: string) {
        this.print(LogLevel.Warn, msg);
    }

    public error(msg: string) {
        this.print(LogLevel.Error, msg);
    }

    public fatal(msg: string) {
        this.print(LogLevel.Fatal, msg);
    }

}