// importing ...
import express, { Response, Request } from 'express'
import { PrismaClient } from "@prisma/client"

// @ts-ignore
const { User } = new PrismaClient()
const router = express.Router()

router.get("/register", async (res: Response, req: Request) => {

})