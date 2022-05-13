import express, { Router } from "express";

const routes = Router();

routes.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        msg: "Hello World",
    })

});

export default routes;
