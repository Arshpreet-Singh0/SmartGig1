import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY || "";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, accountType } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      res.status(400).json({
        message: "User already exist with provided email.",
        success: true,
      });
      return;
    }

    const hashedPassword = await bcryptjs.hash(password, 5);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        accountType,
      },
    });

    res.status(200).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    let user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
      return;
    }

    const isPasswordMatched = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatched) {
      res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
      return;
    }

    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "7d",
    });

    const constructedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      accountType : user.accountType,
    }

    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none", 
        secure: false,
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user : constructedUser,
      });
  } catch (error) {
    console.log(error);
  }
};


export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId;
  const {
    name,
    about,
    location,
    responseTime,
    profilePicture,
    role,
    education,
    skills
  } = req.body;

  try {
    const userExists = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!userExists) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        name,
        about,
        location,
        role,
        responseTime,
        profilePicture,
        education: {
          deleteMany: {}, 
          create: education // Add new education records
        },
        skills: {
          deleteMany: {},
          create: skills.map((skill : any) => ({
            domain: skill.domain,
            skills: { set: skill.skills } // Using 'set' for array fields
          }))
        }
      },
      select : {
        id : true,
        name : true,
        about : true,
        location : true,
        role : true,
        email : true,
        responseTime : true,
        projectsCompleted : true,
        profilePicture : true,
        education : true,
        rating : true,
        ratingCount : true,
        skills : true
      },
      
    });

    res.status(200).json({
      updatedUser,
      success : true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating user profile", error });
  }
};

export const getUserProfile = async (req:Request, res:Response)=>{
  const userId = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        id: true,
        name: true,
        about: true,
        location: true,
        role: true,
        email : true,
        responseTime: true,
        projectsCompleted : true,
        rating : true,
        ratingCount : true,
        profilePicture : true,
        education: true,
        skills: true
    },
  });

  res.status(200).json({
    user,
    success : true
  });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating user profile", error });
  }

}