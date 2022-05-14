import { Request, Response } from "express";
import prisma from "../prismaProvider";

const UpdateDepartmentController = {
    update: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const _department = req.body;
            
            const _dep = await prisma.department.findFirst({ where: { id } });
            if (!_dep)
                return resp.status(404).json({
                    msg: `Department ${id}, não foi encontrado.`
                }); 

            const department = await prisma.department.update({
                where: { id },
                data: _department,
                select: { name: true, id: true }
            });

            return resp.json({
                result: department
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de atualizar o department",
                err,

            });

        }

    }

};

export default UpdateDepartmentController;
