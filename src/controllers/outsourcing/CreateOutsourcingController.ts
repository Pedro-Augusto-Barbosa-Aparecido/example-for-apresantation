import { Request, Response } from "express";
import prisma from "../prismaProvider";

const CreateOutsourcingController = {
    create: async function (req: Request, resp: Response) {
        try {

        } catch (err) {
            return resp.json({ 
                msg: "Erro na hora de criar Outsourcing",
                err
            });
        }
    }

};

export default CreateOutsourcingController;
