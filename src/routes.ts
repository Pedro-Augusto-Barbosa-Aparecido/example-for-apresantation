import { Router } from "express";

import CreateAccountController from "./controllers/accounts/CreateAccountController";
import DeleteAccountController from "./controllers/accounts/DeleteAccountController";
import GetAccountController from "./controllers/accounts/GetAccountController";
import UpdateAccountController from "./controllers/accounts/UpdateAccountController";

import DeleteUserController from "./controllers/users/DeleteUserController";
import GetUserController from "./controllers/users/GetUserController";


const routes = Router();

routes.post("/account/", CreateAccountController.create);
routes.get("/account/", GetAccountController.getList);
routes.get("/account/:id", GetAccountController.get);
routes.delete("/account/:id", DeleteAccountController.delete);
routes.put("/account/:id", UpdateAccountController.update);

routes.get("/user/", GetUserController.getList);
routes.delete("/user/:id", DeleteUserController.delete);

export default routes;
