import { LogRule } from "./LogRule";
import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";
import { LogAppender } from "./LogAppender";

export class LogFactory {

    constructor(private logAppender: LogAppender, private logRules: LogRule[]) {

    }

    public getLoglevel(name: string): LogLevel {
        var result: LogLevel = LogLevel.Error;
        this.logRules.forEach(i => {
            if (i.pattern.test(name)) {
                result = i.logLevel;
            }
        });
        return result;
    }

    public getLogger(name: string) {
        var level = this.getLoglevel(name);
        return new Logger(name, level, this.logAppender);
    }

}