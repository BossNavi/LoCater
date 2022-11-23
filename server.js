const express = require("express")
const path = require("path")
const dotenv = require("dotenv")


dotenv.config({path: './.env'})
const PORT = process.env.PORT

const app = express()
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname, "/Assets")))
app.use("/img",express.static(path.join(__dirname, "/Assets/img")))

// set View Engine
app.set("view engine", "hbs")


// Define Routes
app.use('/', require("./routes/pages"))
app.use('/auth', require("./routes/auth"))




app.listen(PORT, (res, req) => {
    console.log(`Server is running, http://localhost:${PORT}`)
})