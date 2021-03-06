import express from "express";
import http from "http";
import bodyParser from "body-parser";
import users from "./routes/users";
require('dotenv').config();
const app = express();

console.log(`Your port is ${process.env.PORT}`);
app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", users);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
