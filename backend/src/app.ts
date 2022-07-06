import express, { Response, Request } from 'express'
import bcrypt from 'bcryptjs'
// @ts-ignore
import cors from 'cors'
import { Prisma, PrismaClient } from "@prisma/client"

// app
const app = express()
const prisma = new PrismaClient()

// cors
app.use(
    cors({
        origin: "*"
    })
)

// users
// app.use('/api/user', require('./routes/user.routes'))

app.post("/api/register", async (res: Response, req: Request) => {
    const { username, email, password: plainTextPassword } = req.body 

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
    return res.json({ status: 'success', data: "Successfully added!"})
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
