import { LogLevel } from "./LogLevel";

export class Logger {

    constructor(private name: string, private logLevel: LogLevel) {

    }

    private print(logLevel: LogLevel, msg: string) {
        if (logLevel >= this.logLevel) {
            var now = new Date();
            
            // TODO: Make it configurable
            console.log(
                ("  " + now.toLocaleString()).slice(-19)
                + ": "
                + ("     " + LogLevel[logLevel]).slice(-5)
                + ": "
                + (this.name + "                                  ").substring(0, 25)
                + ": " + msg
            );
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