import { Request, Response } from "express";
import prisma from "../prismaProvider";

const DeleteDepartmentController = {
    delete: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const department = await prisma.department.findFirst({
                where: { id }
            });

            if (!department)
                return resp.status(404).json({
                    msg: `Department ${id} não encontrado, não foi possível deletá-lo`
                });

            const _department = await prisma.department.delete({
                where: { id },
                select: { name: true, id: true }
            });

            return resp.json({
                result: _department
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de deletar o department",
                err
            });

        }

    }

};

export default DeleteDepartmentController;
