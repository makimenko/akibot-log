import { LogRule } from "./LogRule";
import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";
import { LogAppender } from "./LogAppender";

export class LogFactory {

    private loggers: Logger[] = [];

    constructor(private logAppender: LogAppender, public logRules: LogRule[]) {

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
        var logger = new Logger(name, level, this.logAppender);
        this.loggers.push(logger);
        return logger;
    }

    public updateLogRules(newLogRules: LogRule[]) {
        this.logRules = newLogRules;
        this.loggers.forEach((l) => l.logLevel = this.getLoglevel(l.name));
    }

}