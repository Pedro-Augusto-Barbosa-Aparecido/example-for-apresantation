import { UserCreate } from './../../types/user';
import { Request, Response } from "express";
import prisma from '../prismaProvider';

const CreateUserController = {
    create: async function (req: Request, resp: Response) {
        try {
            const _user: UserCreate = req.body;

            const __user = await prisma.user.findFirst({ where: { email: _user.email } });
            if (__user)
                return resp.json({
                    msg: `Já existe um usuário com o email: ${_user.email}`
                });

            const user = await prisma.user.create({
                data: {
                    ..._user
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });

            return resp.json({
                result: user
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de criar o usuário",
                err
            });

        }

    }

};

export default CreateUserController;
