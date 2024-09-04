import {userModel} from "../schemas/userSchema.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mongoDBClient } from "../clients/mongoClient.mjs";

export const createUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({email, password: hashedPassword});
        await mongoDBClient.save(user);
        res.status(201).send({email, password: hashedPassword});
    } catch (e) {
        res.status(401).send({status: "Bad request"});
    }
};

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await mongoDBClient.findOne(userModel,{email});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid credentials");
        }
        const token = jwt.sign({id: user._id}, "your-jwt-secret", {
            expiresIn: "1h",
        });
        res.status(200).json({token});
    } catch (e) {
        console.log(e);
    }
};
