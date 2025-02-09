//методы

const express = require("express")
const app = express()
const path = require("path")
const multer = require("multer")
const port = 3000
const bodyparser = require("body-parser")
const cors = require("cors")
const users = require("./Backend/modules/UsersInfo.js")
const { Pool } = require("pg")
const fs = require("fs")
// const { user, password, database } = require("pg/lib/defaults.js")
const userData = JSON.parse(fs.readFileSync("userData.json"))
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: "5432",
    password: "kirigo888!",
    database: "Shop"
})

pool.connect()
.then(client => { 
    console.log('Успешное подключение к базе данных');
    client.release();
})
.catch(err => console.error('Ошибка подключения к базе данных', err.stack));
console.log(users)
app.use(cors());
app.use(bodyparser.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname,"Frontend")))
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, "../Frontend", "index.html")); });

app.get("/users",(req, res) => {
    console.log('!')
    res.json(users)
})
app.post("/enter",(req,res) =>{
    const password = req.body.password
    const login = req.body.login
    console.log(password,login)
})
app.post("/register", (req,res) => {
    const userLogin = req.body.login
    const password = req.body.password
    const Gmail = req.body.Gmail
    const users = []
    // const userExists = userData.some(user => user.login === login)
    // if (userExists){
    // }
    // else { 
    // res.status(404).json({message: "This user had already created"})
    // }
    userData.push({
        "user": {
            "login": userLogin,
            "password": password,
            "gmail": Gmail,
            "image": "https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
            "balance": "0",
            "age": "none"
        }  

    })
    fs.writeFileSync("userData.json", JSON.stringify(userData, null, 2));
    res.status(201).json({message:"User register successfuly"})
})
app.listen(port, () => {
    console.log("Сервер запущен, порт: http://localhost:"+port )
}) 
