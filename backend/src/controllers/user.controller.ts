import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY || "";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
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
    

    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, bio, skills } = req.body;

    const userId = req.userId;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
    if (!user) {
      res.status(400).json({
        messgae: "User not found",
        success: false,
      });
      return;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name: name || user.name,
        bio: bio || user.bio,
        skills: skills || user.skills,
      },
      select : {
        id : true,
        name : true,
        email : true,
        bio : true,
        skills : true,
        profilePicture : true
      }
    });

    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};
