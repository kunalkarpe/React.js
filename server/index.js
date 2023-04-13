const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const PORT = 3000;
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());

const TodoItemRoute = require("./Routes/todoItems");


// connecting mongoodb
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Databse is connected"))
    .catch(err => console.log("err"))

app.use('/', TodoItemRoute);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

