import express from 'express'

// app
const app = express()

// users
app.use('/api/user', require('./routes/user.routes'))

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})