import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

app.use(express.json());

app.get('/',async (req, res)=> {
    const response = await client.user.findMany({})
    res.json({
        response
    })
})

app.post("/user", async(req, res)=> {
    const response = await client.user.create({
        data: {
            username: Math.random().toString(), 
            password: Math.random().toString()
        }
    })
    if(!response) {
        res.json({
            message : "Server Error"
        })
    }
    res.json({
        message: "user created"
    });
})

app.listen(3000, ()=> {
    console.log("Server is running at port 3000");
})