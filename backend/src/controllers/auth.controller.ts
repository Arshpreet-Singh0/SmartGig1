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
      .cookie("token", token)
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
