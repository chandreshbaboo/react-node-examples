import express from "express";
import http from "http";
import bodyParser from "body-parser";
import users from "./routes/users";
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", users);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
