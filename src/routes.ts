import { Router } from "express";

import CreateAccountController from "./controllers/accounts/CreateAccountController";
import DeleteAccountController from "./controllers/accounts/DeleteAccountController";
import GetAccountController from "./controllers/accounts/GetAccountController";
import UpdateAccountController from "./controllers/accounts/UpdateAccountController";

import CreateDepartmentController from "./controllers/department/CreateDepartmentController";
import DeleteDepartmentController from "./controllers/department/DeleteDepartmentController";
import GetDepartmentController from "./controllers/department/GetDepartmentController";
import UpdateDepartmentController from "./controllers/department/UpdateDepartmentController";

import CreateUserController from "./controllers/users/CreateUserController";
import DeleteUserController from "./controllers/users/DeleteUserController";
import GetUserController from "./controllers/users/GetUserController";
import UpdateUserController from "./controllers/users/UpdateUserController";

const routes = Router();

routes.post("/account/", CreateAccountController.create);
routes.get("/account/", GetAccountController.getList);
routes.get("/account/:id", GetAccountController.get);
routes.delete("/account/:id", DeleteAccountController.delete);
routes.put("/account/:id", UpdateAccountController.update);

routes.get("/user/:id", GetUserController.get);
routes.get("/user/", GetUserController.getList);
routes.delete("/user/:id", DeleteUserController.delete);
routes.post("/user/", CreateUserController.create);
routes.put("/user/:id", UpdateUserController.update);

routes.get("/department/", GetDepartmentController.getList);
routes.get("/department/:id", GetDepartmentController.get);
routes.post("/department/", CreateDepartmentController.create);
routes.put("/department/:id", UpdateDepartmentController.update);
routes.delete("/department/:id", DeleteDepartmentController.delete);

export default routes;
