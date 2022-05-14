import { AccountUpdate } from './../../types/account';
import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const UpdateAccountController = {
    update: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const accountToUpdate: AccountUpdate = req.body;
            
            const account = await prisma.account.findFirst({
                where: { id }
            });

            if (!account)
                return resp.status(404).json({
                    msg: `Account ${id} não foi encontrada`
                });
            
            let user = {};
            if (accountToUpdate.user) {
                user = {
                    connectOrCreate: {
                        where: { id: accountToUpdate.user.id },
                        create: {
                            name: accountToUpdate.user.name,
                            email: accountToUpdate.user.email
                        }
                        
                    }
                }
            }

            const _account = await prisma.account.update({
                where: {
                    id
                },
                data: {
                    name: accountToUpdate.name,
                    users: user
                }
            });

            return resp.json({
                result: _account
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de atualizar a account",
                err,

            });

        }

    }

} 

export default UpdateAccountController;
