import IPerson from "./IPerson";
import AdminModel from "./AdminModel";
import UserModel from "./UserModel";

export default class Main {

    public execution(personObj: IPerson) {

        if (personObj instanceof AdminModel) {

            let adminModelObj: AdminModel = personObj as AdminModel;
            console.log("Admin Model");
            console.log(adminModelObj.fullName);

        }
        else if (personObj instanceof UserModel) {

            let userModelObj: UserModel = personObj as UserModel;
            console.log("User Model");
            console.log(userModelObj.fullName);
        }

    }

}

// UI Middleware
function UiMiddleware() {

    let userModelObj: UserModel = new UserModel();
    userModelObj.fullName = "Kishor Naik";

    let mainObj: Main = new Main();
    mainObj.execution(userModelObj);
}

UiMiddleware();