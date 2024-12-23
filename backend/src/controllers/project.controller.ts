import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createProject = async(req:Request, res:Response) : Promise<void> =>{
    try {
        const userId = req.userId;

        const {title, description, budget, duration, skillsRequired} = req.body;

        if(!title || !description || !budget || !duration || !skillsRequired){
            res.status(400).json({
                message : "All fields requied",
                success : false,
            });
            return;
        }
        
        const project = await prisma.project.create({
            data : {
                userId : Number(userId),
                title,
                description,
                budget : Number(budget),
                duration,
                skillsRequired
            }
        });

        res.status(200).json({
            message : "Project created successfully.",
            success : true,
            project,
        })

    } catch (error) {
        console.log(error); 
    }
};

export const updateStatus = async(req:Request, res:Response):Promise<void>=>{
    try {
        const {status} = req.body;
        const {projectId} = req.params;

        const project = await prisma.project.update({
            where : {
                id : Number(projectId),
            },
            data : {
                status,
            },
        });

        res.status(200).json({
            message : "Project status updated successfully.",
            success : true,
            project
        });

    } catch (error) {
        console.log(error); 
    }
};

export const getProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.params.page, 10) || 1;  // Ensure `page` is a number, defaulting to 1 if undefined
        const pageSize = 10;

        // Retrieve both the list of projects and the total count
        const [projects, totalProjects] = await prisma.$transaction([
            prisma.project.findMany({
                skip: (page - 1) * pageSize,
                take: pageSize,
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    User: {
                        select: {
                            name: true,
                            email: true,
                        }
                    }
                }
            }),
            prisma.project.count()
        ]);

        res.status(200).json({
            totalProjects,
            projects,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
