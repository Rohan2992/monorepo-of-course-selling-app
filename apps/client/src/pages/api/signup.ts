import { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/dbConnect";

const SECRET = "SECRET";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (admin) {
    res.status(403).json({ msg: "Username Already Exists" });
  } else {
    const obj = { username, password };
    const newAdmin = new Admin(obj);
    newAdmin.save();

    const token = jwt.sign({ username, role: "Admin" }, SECRET, {
      expiresIn: "1h"
    });
    res.json({ msg: "Admin created successfully", token });
  }
}
