import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const DeleteUserController = {
    delete: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;

            const user = await prisma.user.findFirst({
                where: {
                    id
                }
            });

            if (!user)
                return resp.status(404).json({
                    msg: `Erro ao deletar o user ${id}, ele não existe no sistema`
                });

            const _user = await prisma.user.delete({
                where: {
                    id
                }
            });

            return resp.json({
                result: user
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de deletar a account",
                err,

            });
        }

    }

};

export default DeleteUserController;
