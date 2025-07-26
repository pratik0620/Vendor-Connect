import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import env from "dotenv";

const app = express();
const port = process.env.PORT || 3000;

env.config();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});