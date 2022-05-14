import { UserGetListRequest } from './../../types/user';
import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const GetUserController = {
    getList: async function (req: Request, resp: Response) {
        try {
            const filter: UserGetListRequest = req.body;
            const users = await prisma.user.findMany({
                where: filter,
                select: {
                    name: true,
                    email: true,
                    id: true
                }
            });

            return resp.json({
                results: users,
                total: users.length
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de fazer a busca",
                err
            })

        }

    },

    get: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const user = await prisma.user.findFirst({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });

            if (!user) 
                return resp.status(404).json({
                    msg: `User ${id} não foi encontrado`
                });

            return resp.json({
                result: user
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de fazer a busca",
                err

            });

        }

    }

};

export default GetUserController;
