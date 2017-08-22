"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
var rules = [
    {
        pattern: new RegExp(".*"),
        logLevel: index_1.LogLevel.Info
    }, {
        pattern: new RegExp("MyComponent2"),
        logLevel: index_1.LogLevel.Trace
    }
];
const logFactory = new index_1.LogFactory(new index_1.ConsoleLogAppender(), rules);
// ------------------------------------------------------------------------------------
var logger1 = logFactory.getLogger("MyComponent1");
var logger2 = logFactory.getLogger("MyComponent2");
logger1.info("this is info message");
logger1.debug("this message should be invisible");
logger2.debug("this is debug message");
logger2.error("this is error message");
logger2.info("this is info message");
logger1.info("this is info message");
const logFactory2 = new index_1.LogFactory(new index_1.ChromeLogAppender(), rules);
var logger3 = logFactory2.getLogger("ChromeComponent");
logger3.error("Error message");
logger3.info("Info message");
//# sourceMappingURL=sandbox.js.map