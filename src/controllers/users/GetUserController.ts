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

    }

};

export default GetUserController;
