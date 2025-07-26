import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import mysql2 from "mysql2";
import env from "dotenv";

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

env.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Login route
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", async (req, res) => {
    const {username, password, role} = req.body;

    if(role === "vendor") {
        const result = await db.query("SELECT * FROM Vendor WHERE username = ?", 
            [username]);
        
        if(result.rows.length === 0){
            return res.send("Vendor not found");
        }

        return res.sendFile(__dirname + "/public/vendor_dashboard.html", {username});

    } else if (role === "supplier") {
        const result = await db.query("SELECT * FROM Supplier WHERE username = ?", 
            [username]);
        
        if(result.rows.length === 0){
            return res.send("Supplier not found");
        };

        return res.sendFile(__dirname + "/public/supplier_dashboard.html", {username});
    } else {
        return res.status(400).send("Invalid role");
    }
});

//Vendor Dashboard route
app.get("/vendor/:id/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/vendor_dashboard.html");
});

//Vendor Inventory route
app.get("/vendor/:id/inventory", async (req, res) => {
    const vendorId = req.params.id;
    const [rows] = await db.query("SELECT * FROM VendorInventory WHERE vendor_id = ?", [vendorId]);
    res.sendFile(__dirname + "/public/vendor_inventory.html");
});

app.post("/vendor/:id/inventory", async (req, res) => {
    const vendorId = req.params.id;
    const { product, quantity, status } = req.body;

    // Handle inventory update logic here
    console.log(`Product: ${product}, Quantity: ${quantity}, Status: ${status}`);
});

//Vendor Order route
app.get("/vendor/:id/order", (req, res) => {
    res.sendFile(__dirname + "/public/vendor_order.html");
});

//Supplier Dashboard route
app.get("/supplier/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/supplier_dashboard.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
