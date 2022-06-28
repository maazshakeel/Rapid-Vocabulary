// importing ...
import express, { Response, Request } from 'express'
import bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client"

// @ts-ignore
const { User } = new PrismaClient()
const router = express.Router()

router.get("/register", async (res: Response, req: Request) => {
    const { username, password: plainTextPassword } = req.body 

    // validating if user filled the form
    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    // Password length
    if (plainTextPassword.length < 5) {
        return res.json({ status: 'error', error: 'Password too small. Should be at least 6 characters.'})
    }
})