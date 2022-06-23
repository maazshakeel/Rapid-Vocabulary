import Express, { Request, Response} from 'express'

const app = Express();
app.use(Express.json());

const words = 
        [
            {
                id: 1,
                word: "Serene",
                meaning: "Calming",
                similar: ["Calm", "Relax"],
                Urdu: "sakoon"
            },
            {
                id: 2,
                word: "Lethargic",
                meaning: "Feeling sleepy, not to work",
                similar: ["Laziness", "Lazy"],
                Urdu: "sustee"
            },
            {
                id: 3,
                word: "mumble",
                meaning: "Speak in a slowly so anyone can't hear",
                similar: ["gossip", "mutter"],
                Urdu: "burbrana"
            },
            {
                id: 4,
                word: "Summit",
                meaning: "At the highest point",
                similar: ["High", "Crest"],
                Urdu: "onchi jaga ya cheez"
            },
        ] 

app.get("/api/words", (req: Request, res: Response) => {
    return res.json({ status: 200, words: words});
})

app.post("/api/add_word", (req: Request, res: Response) => {
    const word: any = req.params.word || null;
    if (word !== null) {
        // adding the word to the database
        words.push(word)
        res.sendStatus(200) 
    } else {
        res.sendStatus(401)
    }
})
app.get("/api/word/:id", (req: Request, res: Response) => {

    const id = parseInt(req.params.id)
    const len = words.length === id
    if (len) {
        return words.map(word => {
            if (word.id === id) {
                return word;
            }
        })
    } else {
        return res.sendStatus(301)
    }

})

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000")
})