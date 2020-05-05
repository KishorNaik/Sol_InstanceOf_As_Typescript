"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminModel_1 = require("./AdminModel");
var UserModel_1 = require("./UserModel");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.execution = function (personObj) {
        if (personObj instanceof AdminModel_1.default) {
            var adminModelObj = personObj;
            console.log("Admin Model");
            console.log(adminModelObj.fullName);
        }
        else if (personObj instanceof UserModel_1.default) {
            var userModelObj = personObj;
            console.log("User Model");
            console.log(userModelObj.fullName);
        }
    };
    return Main;
}());
exports.default = Main;
// UI Middleware
function UiMiddleware() {
    var userModelObj = new UserModel_1.default();
    userModelObj.fullName = "Kishor Naik";
    var mainObj = new Main();
    mainObj.execution(userModelObj);
}
UiMiddleware();
//# sourceMappingURL=Main.js.map