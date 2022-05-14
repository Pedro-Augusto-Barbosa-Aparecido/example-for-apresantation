import { DepartmentCreate } from './../../types/department';
import { Request, Response } from "express";
import prisma from "../prismaProvider";

const CreateDepartmentController = {
    create: async function (req: Request, resp: Response) {
        try {
            const department = req.body;
            if (department.user)
                department.user = {
                    connect: {
                        id: department.user
                    }
                }

            const _department = await prisma.department.create({
                data: department,
                select: {
                    name: true,
                    id: true,
                    user: true
                }
            });

            return resp.json({
                result: _department
            });

        } catch (err) {
            console.log(err);
            
            return resp.status(500).json({
                msg: "Erro na hora de criar o department",
                err
            });

        }

    }

};

export default CreateDepartmentController;
