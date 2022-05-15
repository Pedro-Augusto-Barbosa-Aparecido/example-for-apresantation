import { AccountCreate } from '../../types/account';
import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const CreateAccountController = {
    create: async function (req: Request, resp: Response) {
        const accountToCreate: AccountCreate = req.body;
        let user = {};
        if (accountToCreate.user) {
            user = {
                create: {
                    name: accountToCreate.user.name,
                    email: accountToCreate.user.email
                }
            }
        }

        try {
            const account = await prisma.account.create({
                data: {
                    name: accountToCreate.name,
                    users: user
    
                },
                select: {
                    id: true,
                    name: true
                }
            });
    
            return resp.status(201).json({
                result: account

            });
        } catch (err) {
            return resp.status(500).json({
                msg: `Não foi possível criar a account ${accountToCreate.name}`,
                err,

            });

        }

    }

} 

export default CreateAccountController;
