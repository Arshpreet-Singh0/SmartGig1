import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createProposal = async(req:Request, res:Response) : Promise<void> =>{
    try {
        const {coverLetter, proposedBudget, proposedTimeline} = req.body;
        const {projectId} = req.params;
        const freelancerId = req.userId;

        if(!coverLetter || !proposedBudget || !proposedTimeline){
            res.status(400).json({
                message : "All fields are required.",
                success : true,
            });
            return;
        }

        const proposal = await prisma.proposal.findFirst({
            where : {
                projectId : Number(projectId),
                freelancerId : Number(freelancerId),
            }
        });

        if(proposal){
            res.status(400).json({
                message : "Proposal already exist for this project.",
                success : false,
            });
            return;
        };

        const p = await prisma.proposal.create({
            data : {
                projectId : Number(projectId),
                freelancerId : Number(freelancerId),
                coverLetter,
                proposedBudget : Number(proposedBudget),
                proposedTimeline
            }
        });

        res.status(200).json({
            message : "Proposal submitted successfully.",
            success : true,
            proposal : p,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProposals = async(req:Request, res:Response) : Promise<void>=>{
    try {
        const userId = req.userId;

        const proposals = await prisma.proposal.findMany({
            where : {
                freelancerId : Number(userId),
            },
        });

        res.status(200).json({
            proposals,
        });
    } catch (error) {
        console.log(error);
    }
}