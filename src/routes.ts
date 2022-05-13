import express, { Router } from "express";
import CreateAccountController from "./controllers/accounts/CreateAccountController";

const routes = Router();

routes.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        msg: "Hello World",
    });

});

routes.post("/account/", CreateAccountController.create);

export default routes;
