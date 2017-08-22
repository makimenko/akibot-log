import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";

export class ChromeLogAppender implements LogAppender {

    FgRed = 'color: white; background:#ffcccc';
    FgYellow = 'color: #cccc00;';
    Default = 'color: #663300;';

    append(logLevel: LogLevel, name: string, msg: string): void {
        // TODO: make it configurable
        var now = new Date();
        var consoleMessage : string = 
             "%c"
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + "%c"
            + msg;

        console.log(
            consoleMessage
            , (logLevel >= LogLevel.Error ? this.FgRed : this.FgYellow)
            , (logLevel >= LogLevel.Error ? this.FgRed : this.Default)
        );
    }

}