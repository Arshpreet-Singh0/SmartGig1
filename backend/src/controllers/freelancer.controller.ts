import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getFreelancerAssignedProjects = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
        const projects = await prisma.project.findMany({
            where: {
                freelancerId: Number(req.userId),
            },
        });

        res.status(200).json({
            projects,
        });
    } catch (error) {
        console.log(error);
        
    }
  }