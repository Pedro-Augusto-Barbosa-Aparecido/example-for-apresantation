import { Request, Response } from "express";
import prisma from "../prismaProvider";

const GetOutsourcingController = {
    getList: async function (req: Request, resp: Response) {
        try {

        } catch (err) {
            return resp.json({ 
                msg: "Erro na hora de buscar Outsourcing",
                err
            });
        }
    },

    get: async function (req: Request, resp: Response) {
        try {

        } catch (err) {
            return resp.json({ 
                msg: "Erro na hora de buscar Outsourcing",
                err
            });
        }
    }

};

export default GetOutsourcingController;
