import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import mysql2 from "mysql2";
import env from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

env.config();

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
export default db;

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

env.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "style.css"));
});

//Home page route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

//Login route
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

// Login POST route with form validation and redirect logic
app.post("/login", (req, res) => {
    const { username, password, role } = req.body;

    // Simple validation
    if (!username || !password || !role) {
        return res.status(400).send("Please fill in all fields");
    }

    // Save user data in session or database if needed (demo: skip)
    // Redirect to appropriate dashboard based on role
    if (role === "vendor") {
        return res.redirect("/vendor/dashboard");
    } else if (role === "supplier") {
        return res.redirect("/supplier/dashboard");
    } else {
        return res.status(400).send("Invalid role");
    }
});

//Logout route
app.get("/logout", (req, res) => { 
        res.redirect("/login");
});

//Vendor Dashboard route
app.get("/vendor/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "vendor.html"));
});

//Supplier Dashboard route
app.get("/supplier/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "supplier.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
