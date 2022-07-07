// imports

import dotenv from 'dotenv'
dotenv.config()

import express, { Response, Request } from 'express'
import bcrypt from 'bcryptjs'
// @ts-ignore
import cors from 'cors'
import bodyParser from 'body-parser'
import { Prisma, PrismaClient } from "@prisma/client"

// app
const app = express()
const prisma = new PrismaClient()
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

// cors
app.use(express.json())
app.use(bodyParser.json())

// users
// app.use('/api/user', require('./routes/user.routes'))

app.post("/api/register", async (res: Response, req: Request) => {

    // debuging
    console.log(req.body.username)
    // destructering
    const { username, email, password: plainTextPassword } = req.body 

    // validation
    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    if (plainTextPassword.length < 5) {
        return res.json({ status: 'error', error: 'Password too small. Should be at least 6 characters.'})
    }

    // hashing the password
    const password = await bcrypt.hash(plainTextPassword, 37)

    // creating user
    async function main() {
        const response = await prisma.user.create({ 
            data: {
                username,
                email,
                password,
            }
        })
    }
    main()
    .catch((e) => {
        res.json({ status: 'error', error: e})
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
    return res.json({ status: 'success', data: "User successfully registered!"})
})

// @ts-ignore
app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})
