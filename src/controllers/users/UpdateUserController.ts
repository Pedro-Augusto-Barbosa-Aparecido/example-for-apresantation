import { UserCreate } from './../../types/user';
import { Request, Response } from "express";
import prisma from "../prismaProvider"; 

const UpdateUserController = {
    update: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const _user: UserCreate = req.body;
            
            const user = await prisma.user.findFirst({
                where: { id }
            });

            if (!user)
                return resp.status(404).json({
                    msg: `Account ${id} não foi encontrada`
                });

            if (_user.email) {
                const ___user = await prisma.user.findFirst({ where: { email: _user.email } });
                if (___user)
                    return resp.json({
                        msg: `Já existe um usuário com o email: ${_user.email}`
                    });
            }

            const __user = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    ..._user
                }
            });

            return resp.json({
                result: __user
            });

        } catch (err) {
            console.log(err)
            return resp.status(500).json({
                msg: "Erro na hora de atualizar o usuário",
                err,

            });

        }

    }

} 

export default UpdateUserController;
