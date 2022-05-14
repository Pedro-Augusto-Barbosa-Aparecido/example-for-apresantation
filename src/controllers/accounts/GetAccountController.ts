import { AccountGetListRequest } from '../../types/account';
import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const GetAccountController = {
    getList: async function (req: Request, resp: Response) {
        try {
            const filter: AccountGetListRequest = req.body;
            const accounts = await prisma.account.findMany({ 
                where: filter,
                select: { 
                    users: true, 
                    name: true, 
                    id: true
                }
            });

            return resp.json({ results: accounts, total: accounts.length });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora da busca",
                err,

            });

        }

    },

    get: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;

            const account = await prisma.account.findFirst({ 
                where: { 
                    id 
                },
                select: {
                    name: true,
                    users: true
                }
            });

            if (!account) 
                return resp.status(404).json({
                    msg: `Account ${id} não foi encontrada`
                });

            return resp.json({
                result: account 
            });
        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora da busca",
                err,

            });

        }
    }

} 

export default GetAccountController;
