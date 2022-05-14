import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const DeleteAccountController = {
    delete: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;

            const account = await prisma.account.findFirst({
                where: {
                    id
                }
            });
            if (!account)
            return resp.status(404).json({
                msg: `Account ${id} não foi encontrada, por isso não foi possível deletar`
            });

            const _account = await prisma.account.delete({
                where: {
                    id
                },
                select: {
                    name: true,
                    users: true
                }
            });

            return resp.json({
                result: _account
            });
        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de deletar a account",
                err,

            });
        }

    }

} 

export default DeleteAccountController;
