import { Request, Response } from "express";
import prisma from "../prismaProvider";

const GetDepartmentController = {
    getList: async function (req: Request, resp: Response) {
        try {
            const filter = req.body;
            const departments = await prisma.department.findMany({
                where: filter,
                select: { name: true, id: true, user: true }
            });

            return resp.json({
                results: departments,
                total: departments.length
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de fazer a busca dos departments",
                err
            });
        }

    },

    get: async function (req: Request, resp: Response) {
        try {
            const id = req.params.id;
            const department = await prisma.department.findFirst({
                where: { id },
                select: { name: true, id: true, user: true }
            });

            if (!department)
                return resp.status(404).json({
                    msg: `Department ${id}, não foi encontrado.`
                })

            return resp.json({
                results: department
            });

        } catch (err) {
            return resp.status(500).json({
                msg: "Erro na hora de fazer a busca dos departments",
                err
            });
        }

    }

};

export default GetDepartmentController;
