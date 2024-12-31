import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getClientProjects = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.userId;
  
      const projects = await prisma.project.findMany({
        where: {
          userId: Number(userId),
        },
        include: {
          freelancer: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
  
      res.status(200).json({
          projects
      });
    } catch (error) {
      console.log(error);
    }
  };
  