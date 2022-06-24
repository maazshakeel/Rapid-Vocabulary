const server = require("./app")

// const { PORT } = process.env;
const port = 3000

// server listening
server.listen(3000, () => {
    console.log(`Server running on port: 3000`)
})