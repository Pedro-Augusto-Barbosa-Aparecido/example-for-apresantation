import { Request, Response } from "express";
import prisma from "../prismaProvider";

const UpdateOutsourcingController = {
    update: async function (req: Request, resp: Response)  {
        try {

        } catch (err) {
            return resp.json({ 
                msg: "Erro na hora de atualizar Outsourcing",
                err
            });
        }
    }

};

export default UpdateOutsourcingController;
