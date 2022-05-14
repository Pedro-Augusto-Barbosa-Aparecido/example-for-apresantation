import { Request, Response } from "express";
import prisma from "../prismaProvider";

const DeleteOutsourcingController = {
    delete: async function (req: Request, resp: Response) {
        try {

        } catch (err) {
            return resp.json({ 
                msg: "Erro na hora de deletar Outsourcing",
                err
            });
        }
    }

};

export default DeleteOutsourcingController;
