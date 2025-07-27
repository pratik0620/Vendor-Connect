import express from "express";
import bodyParser from "body-parser";
import mysql2 from "mysql2/promise";
import env from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

env.config();

// Database connection with promise support
let db;

// Test database connection
async function initializeDatabase() {
    try {
        db = await mysql2.createConnection({
            host: process.env.DB_HOST?.replace(/["']/g, '') || 'localhost',
            user: process.env.DB_USER?.replace(/["']/g, '') || 'root',
            password: process.env.DB_PASSWORD?.replace(/["']/g, '') || '',
            database: process.env.DB_NAME?.replace(/["']/g, '') || 'vendorsupply'
        });
        
        await db.execute('SELECT 1');
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        console.log('Please ensure MySQL is running and credentials are correct');
        console.log('Check your .env file for correct database credentials');
    }
}

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "style.css"));
});

// ==================== STATIC ROUTES ====================

//Home page route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

//Login route
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

// User-specific dashboard routes with validation
app.get("/vendor/:userId/dashboard", async (req, res) => {
    try {
        const { userId } = req.params;
        
        // Validate user exists in database
        const [rows] = await db.execute('SELECT id, name FROM Vendor WHERE id = ?', [userId]);
        
        if (rows.length === 0) {
            return res.status(404).send('Vendor not found. Please check your user ID or login again.');
        }
        
        res.sendFile(path.join(__dirname, "..", "public", "vendor.html"));
    } catch (error) {
        console.error('Vendor dashboard route error:', error);
        res.status(500).send('Internal server error');
    }
});

app.get("/supplier/:userId/dashboard", async (req, res) => {
    try {
        const { userId } = req.params;
        
        // Validate user exists in database
        const [rows] = await db.execute('SELECT id, name FROM Supplier WHERE id = ?', [userId]);
        
        if (rows.length === 0) {
            return res.status(404).send('Supplier not found. Please check your user ID or login again.');
        }
        
        res.sendFile(path.join(__dirname, "..", "public", "supplier.html"));
    } catch (error) {
        console.error('Supplier dashboard route error:', error);
        res.status(500).send('Internal server error');
    }
});

// Legacy routes (redirect to user-specific routes) - for demo only
app.get("/vendor/dashboard", (req, res) => {
    // For demo purposes, redirect to user ID 4
    res.redirect("/vendor/4/dashboard");
});

app.get("/supplier/dashboard", (req, res) => {
    // For demo purposes, redirect to user ID 4
    res.redirect("/supplier/4/dashboard");
});

//Logout route
app.get("/logout", (req, res) => { 
    res.redirect("/login");
});

// ==================== API ROUTES ====================

// Login API route - handles user existence check and returns user-specific routes
app.post("/api/login", async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!username || !password || !role) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        let user;
        let userId;
        const DEFAULT_USER_ID = 4;
        
        if (role === 'vendor') {
            // Check if vendor exists
            const [rows] = await db.execute('SELECT * FROM Vendor WHERE name = ?', [username]);
            
            if (rows.length > 0) {
                // User exists, use their data
                user = rows[0];
                userId = user.id;
            } else {
                // User doesn't exist, use default user ID but with entered username
                userId = DEFAULT_USER_ID;
                const [defaultRows] = await db.execute('SELECT * FROM Vendor WHERE id = ?', [DEFAULT_USER_ID]);
                if (defaultRows.length > 0) {
                    user = { ...defaultRows[0], name: username }; // Use entered username but default user's other data
                } else {
                    return res.status(500).json({ error: "Default user not found" });
                }
            }
        } else if (role === 'supplier') {
            // Check if supplier exists
            const [rows] = await db.execute('SELECT * FROM Supplier WHERE name = ?', [username]);
            
            if (rows.length > 0) {
                // User exists, use their data
                user = rows[0];
                userId = user.id;
            } else {
                // User doesn't exist, use default user ID but with entered username
                userId = DEFAULT_USER_ID;
                const [defaultRows] = await db.execute('SELECT * FROM Supplier WHERE id = ?', [DEFAULT_USER_ID]);
                if (defaultRows.length > 0) {
                    user = { ...defaultRows[0], name: username }; // Use entered username but default user's other data
                } else {
                    return res.status(500).json({ error: "Default user not found" });
                }
            }
        } else {
            return res.status(400).json({ error: "Invalid role" });
        }

        // Return success with user data and user-specific redirect URL
        res.json({ 
            success: true, 
            user: { id: userId, name: user.name, role },
            redirectUrl: role === 'vendor' ? `/${userId}/vendor/dashboard` : `/${userId}/supplier/dashboard`
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: "Login failed" });
    }
});

// Legacy login route for form submission (redirects) - for hackathon demo
app.post("/login", async (req, res) => {
    try {
        const { username, password, role } = req.body;
        
        let userId = 4; // Default user ID
        
        // Try to find user in database
        if (role === "vendor") {
            const [rows] = await db.execute('SELECT id FROM Vendor WHERE name = ?', [username]);
            if (rows.length > 0) {
                userId = rows[0].id;
            }
            return res.redirect(`/${userId}/vendor/dashboard`);
        } else if (role === "supplier") {
            const [rows] = await db.execute('SELECT id FROM Supplier WHERE name = ?', [username]);
            if (rows.length > 0) {
                userId = rows[0].id;
            }
            return res.redirect(`/${userId}/supplier/dashboard`);
        } else {
            return res.status(400).send("Invalid role");
        }
    } catch (error) {
        console.error('Legacy login error:', error);
        // Fallback to default user
        if (req.body.role === "vendor") {
            return res.redirect("/4/vendor/dashboard");
        } else {
            return res.redirect("/4/supplier/dashboard");
        }
    }
});

// ==================== INVENTORY & PRODUCTS API ====================

// Get all inventory items
app.get("/api/inventory", async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT i.*, s.name as supplier_name, si.business_name, si.contact, si.city
            FROM Inventory i
            JOIN Supplier s ON i.supplier_id = s.id
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            ORDER BY i.created_at DESC
        `);
        res.json(rows);
    } catch (error) {
        console.error('Get inventory error:', error);
        res.status(500).json({ error: "Failed to fetch inventory" });
    }
});

// Get inventory by supplier
app.get("/api/inventory/supplier/:supplierId", async (req, res) => {
    try {
        const { supplierId } = req.params;
        const [rows] = await db.execute(
            'SELECT * FROM Inventory WHERE supplier_id = ? ORDER BY created_at DESC',
            [supplierId]
        );
        res.json(rows);
    } catch (error) {
        console.error('Get supplier inventory error:', error);
        res.status(500).json({ error: "Failed to fetch supplier inventory" });
    }
});

// Add new inventory item (supplier)
app.post("/api/inventory", async (req, res) => {
    try {
        const { supplierId, itemName, price, unit, date, lastDate } = req.body;
        
        const [result] = await db.execute(
            'INSERT INTO Inventory (supplier_id, item_name, price, unit, date, last_date) VALUES (?, ?, ?, ?, ?, ?)',
            [supplierId, itemName, price, unit || 'kg', date, lastDate]
        );
        
        res.json({ success: true, id: result.insertId });
    } catch (error) {
        console.error('Add inventory error:', error);
        res.status(500).json({ error: "Failed to add inventory item" });
    }
});

// Update inventory item
app.put("/api/inventory/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { itemName, price, unit, date, lastDate } = req.body;
        
        await db.execute(
            'UPDATE Inventory SET item_name = ?, price = ?, unit = ?, date = ?, last_date = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [itemName, price, unit, date, lastDate, id]
        );
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update inventory error:', error);
        res.status(500).json({ error: "Failed to update inventory item" });
    }
});

// Delete inventory item
app.delete("/api/inventory/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute('DELETE FROM Inventory WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (error) {
        console.error('Delete inventory error:', error);
        res.status(500).json({ error: "Failed to delete inventory item" });
    }
});

// ==================== SUPPLIERS API ====================

// Get all suppliers with their info
app.get("/api/suppliers", async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT s.*, si.business_name, si.supplier_address, si.city, si.state_name, 
                   si.contact, si.latitude, si.longitude
            FROM Supplier s
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            ORDER BY s.name
        `);
        res.json(rows);
    } catch (error) {
        console.error('Get suppliers error:', error);
        res.status(500).json({ error: "Failed to fetch suppliers" });
    }
});

// Get nearby suppliers (mock distance calculation)
app.get("/api/suppliers/nearby", async (req, res) => {
    try {
        const { lat, lng, radius = 10 } = req.query;
        
        // For demo, return all suppliers with mock distance
        const [rows] = await db.execute(`
            SELECT s.*, si.business_name, si.supplier_address, si.city, si.state_name, 
                   si.contact, si.latitude, si.longitude,
                   ROUND(RAND() * 5 + 0.5, 1) as distance,
                   ROUND(RAND() * 1 + 4, 1) as rating
            FROM Supplier s
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            ORDER BY distance
        `);
        res.json(rows);
    } catch (error) {
        console.error('Get nearby suppliers error:', error);
        res.status(500).json({ error: "Failed to fetch nearby suppliers" });
    }
});

// ==================== CART API ====================

// Get cart items for a vendor
app.get("/api/vendor/:vendorId/cart", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const [rows] = await db.execute(`
            SELECT c.*, i.item_name, i.price, i.unit, s.name as supplier_name
            FROM Cart c
            JOIN Inventory i ON c.item_id = i.id
            JOIN Supplier s ON i.supplier_id = s.id
            WHERE c.vendor_id = ?
        `, [vendorId]);
        res.json(rows);
    } catch (error) {
        console.error('Get cart error:', error);
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
});

// Add or update item in cart
app.post("/api/vendor/:vendorId/cart", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const { itemId, quantity } = req.body;

        // Check if item is already in cart
        const [existing] = await db.execute(
            'SELECT * FROM Cart WHERE vendor_id = ? AND item_id = ?',
            [vendorId, itemId]
        );

        if (existing.length > 0) {
            // Update quantity
            await db.execute(
                'UPDATE Cart SET quantity = ?, date_added = CURRENT_TIMESTAMP WHERE vendor_id = ? AND item_id = ?',
                [quantity, vendorId, itemId]
            );
        } else {
            // Insert new item
            await db.execute(
                'INSERT INTO Cart (vendor_id, item_id, quantity) VALUES (?, ?, ?)',
                [vendorId, itemId, quantity]
            );
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Add/update cart error:', error);
        res.status(500).json({ error: "Failed to add/update cart item" });
    }
});

// Delete item from cart
app.delete("/api/vendor/:vendorId/cart/:itemId", async (req, res) => {
    try {
        const { vendorId, itemId } = req.params;
        await db.execute(
            'DELETE FROM Cart WHERE vendor_id = ? AND item_id = ?',
            [vendorId, itemId]
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Delete cart item error:', error);
        res.status(500).json({ error: "Failed to delete cart item" });
    }
});

// Clear entire cart for vendor
app.delete("/api/vendor/:vendorId/cart", async (req, res) => {
    try {
        const { vendorId } = req.params;
        await db.execute('DELETE FROM Cart WHERE vendor_id = ?', [vendorId]);
        res.json({ success: true });
    } catch (error) {
        console.error('Clear cart error:', error);
        res.status(500).json({ error: "Failed to clear cart" });
    }
});



// ==================== ORDERS API ====================

// Create new order
app.post("/api/orders", async (req, res) => {
    try {
        const { vendorId, supplierId, itemId, quantity, totalPrice } = req.body;
        
        const [result] = await db.execute(
            'INSERT INTO OrderTable (vendor_id, supplier_id, item_id, quantity, total_price, date, status) VALUES (?, ?, ?, ?, ?, CURDATE(), "pending")',
            [vendorId, supplierId, itemId, quantity, totalPrice]
        );
        
        res.json({ success: true, orderId: result.insertId });
    } catch (error) {
        console.error('Create order error:', error);
        res.status(500).json({ error: "Failed to create order" });
    }
});

// Get orders by vendor
app.get("/api/orders/vendor/:vendorId", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const [rows] = await db.execute(`
            SELECT o.*, i.item_name, i.price, i.unit, s.name as supplier_name, si.business_name
            FROM OrderTable o
            JOIN Inventory i ON o.item_id = i.id
            JOIN Supplier s ON o.supplier_id = s.id
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            WHERE o.vendor_id = ?
            ORDER BY o.date DESC
        `, [vendorId]);
        res.json(rows);
    } catch (error) {
        console.error('Get vendor orders error:', error);
        res.status(500).json({ error: "Failed to fetch vendor orders" });
    }
});

// Get orders by supplier
app.get("/api/orders/supplier/:supplierId", async (req, res) => {
    try {
        const { supplierId } = req.params;
        const [rows] = await db.execute(`
            SELECT o.*, i.item_name, i.price, i.unit, v.name as vendor_name, vi.business_name
            FROM OrderTable o
            JOIN Inventory i ON o.item_id = i.id
            JOIN Vendor v ON o.vendor_id = v.id
            LEFT JOIN VendorInfo vi ON v.id = vi.vendor_id
            WHERE o.supplier_id = ?
            ORDER BY o.date DESC
        `, [supplierId]);
        res.json(rows);
    } catch (error) {
        console.error('Get supplier orders error:', error);
        res.status(500).json({ error: "Failed to fetch supplier orders" });
    }
});

// Update order status
app.put("/api/orders/:orderId/status", async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        
        await db.execute(
            'UPDATE OrderTable SET status = ? WHERE id = ?',
            [status, orderId]
        );
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update order status error:', error);
        res.status(500).json({ error: "Failed to update order status" });
    }
});

// ==================== VENDOR/SUPPLIER INFO API ====================

// Get vendor info
app.get("/api/vendor/:vendorId/info", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const [rows] = await db.execute(`
            SELECT v.*, vi.business_name, vi.vendor_address, vi.city, vi.state_name, 
                   vi.contact, vi.latitude, vi.longitude
            FROM Vendor v
            LEFT JOIN VendorInfo vi ON v.id = vi.vendor_id
            WHERE v.id = ?
        `, [vendorId]);
        
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Vendor not found" });
        }
    } catch (error) {
        console.error('Get vendor info error:', error);
        res.status(500).json({ error: "Failed to fetch vendor info" });
    }
});

// Update vendor info
app.put("/api/vendor/:vendorId/info", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const { businessName, address, city, state, contact, latitude, longitude } = req.body;
        
        // Check if vendor info exists
        const [existing] = await db.execute('SELECT * FROM VendorInfo WHERE vendor_id = ?', [vendorId]);
        
        if (existing.length > 0) {
            // Update existing info
            await db.execute(
                'UPDATE VendorInfo SET business_name = ?, vendor_address = ?, city = ?, state_name = ?, contact = ?, latitude = ?, longitude = ? WHERE vendor_id = ?',
                [businessName, address, city, state, contact, latitude, longitude, vendorId]
            );
        } else {
            // Insert new info
            await db.execute(
                'INSERT INTO VendorInfo (vendor_id, business_name, vendor_address, city, state_name, contact, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [vendorId, businessName, address, city, state, contact, latitude, longitude]
            );
        }
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update vendor info error:', error);
        res.status(500).json({ error: "Failed to update vendor info" });
    }
});

// Get supplier info
app.get("/api/supplier/:supplierId/info", async (req, res) => {
    try {
        const { supplierId } = req.params;
        const [rows] = await db.execute(`
            SELECT s.*, si.business_name, si.supplier_address, si.city, si.state_name, 
                   si.contact, si.latitude, si.longitude
            FROM Supplier s
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            WHERE s.id = ?
        `, [supplierId]);
        
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Supplier not found" });
        }
    } catch (error) {
        console.error('Get supplier info error:', error);
        res.status(500).json({ error: "Failed to fetch supplier info" });
    }
});

// Update supplier info
app.put("/api/supplier/:supplierId/info", async (req, res) => {
    try {
        const { supplierId } = req.params;
        const { businessName, address, city, state, contact, latitude, longitude } = req.body;
        
        // Check if supplier info exists
        const [existing] = await db.execute('SELECT * FROM SupplierInfo WHERE supplier_id = ?', [supplierId]);
        
        if (existing.length > 0) {
            // Update existing info
            await db.execute(
                'UPDATE SupplierInfo SET business_name = ?, supplier_address = ?, city = ?, state_name = ?, contact = ?, latitude = ?, longitude = ? WHERE supplier_id = ?',
                [businessName, address, city, state, contact, latitude, longitude, supplierId]
            );
        } else {
            // Insert new info
            await db.execute(
                'INSERT INTO SupplierInfo (supplier_id, business_name, supplier_address, city, state_name, contact, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [supplierId, businessName, address, city, state, contact, latitude, longitude]
            );
        }
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update supplier info error:', error);
        res.status(500).json({ error: "Failed to update supplier info" });
    }
});

// ==================== USER SPECIFIC DATA API ====================

// Get all inventory items for vendor dashboard
app.get("/api/vendor/:vendorId/inventory", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const [rows] = await db.execute(`
            SELECT i.*, s.name as supplier_name, si.business_name, si.contact, si.city,
                   CASE 
                       WHEN i.quantity <= 5 THEN 'Low Stock'
                       WHEN i.quantity <= 15 THEN 'Medium Stock'
                       ELSE 'In Stock'
                   END as status,
                   DATE_FORMAT(i.updated_at, '%M %d, %Y') as last_updated
            FROM Inventory i
            JOIN Supplier s ON i.supplier_id = s.id
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            ORDER BY i.created_at DESC
        `);
        res.json(rows);
    } catch (error) {
        console.error('Get vendor inventory error:', error);
        res.status(500).json({ error: "Failed to fetch vendor inventory" });
    }
});

// Get vendor's frequent items list (original vendor list functionality)
app.get("/api/vendor/:vendorId/frequent-items", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const [rows] = await db.execute(`
            SELECT vl.*, i.item_name, i.price, i.unit, s.name as supplier_name, si.business_name
            FROM VendorList vl
            JOIN Inventory i ON vl.item_id = i.id
            JOIN Supplier s ON i.supplier_id = s.id
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            WHERE vl.vendor_id = ?
            ORDER BY vl.date DESC
        `, [vendorId]);
        res.json(rows);
    } catch (error) {
        console.error('Get vendor frequent items error:', error);
        res.status(500).json({ error: "Failed to fetch vendor frequent items" });
    }
});

// Add item to vendor's frequent list
app.post("/api/vendor/:vendorId/inventory", async (req, res) => {
    try {
        const { vendorId } = req.params;
        const { itemId } = req.body;
        
        const [result] = await db.execute(
            'INSERT INTO VendorList (vendor_id, item_id, date) VALUES (?, ?, CURDATE())',
            [vendorId, itemId]
        );
        
        res.json({ success: true, id: result.insertId });
    } catch (error) {
        console.error('Add vendor inventory error:', error);
        res.status(500).json({ error: "Failed to add item to vendor inventory" });
    }
});

// Get vendor's cart items (stored in local storage, but API for consistency)
app.get("/api/vendor/:vendorId/cart", async (req, res) => {
    try {
        // For now, return empty cart as cart is managed client-side
        // This can be extended to store cart in database if needed
        res.json([]);
    } catch (error) {
        console.error('Get vendor cart error:', error);
        res.status(500).json({ error: "Failed to fetch vendor cart" });
    }
});

// ==================== SEARCH API ====================

// Search across suppliers and inventory
app.get("/api/search", async (req, res) => {
    try {
        const { q, category, location, minPrice, maxPrice, rating } = req.query;
        
        let query = `
            SELECT DISTINCT i.*, s.name as supplier_name, si.business_name, si.city, si.contact,
                   ROUND(RAND() * 1 + 4, 1) as rating,
                   ROUND(RAND() * 5 + 0.5, 1) as distance
            FROM Inventory i
            JOIN Supplier s ON i.supplier_id = s.id
            LEFT JOIN SupplierInfo si ON s.id = si.supplier_id
            WHERE 1=1
        `;
        
        const params = [];
        
        if (q) {
            query += ` AND (i.item_name LIKE ? OR s.name LIKE ? OR si.business_name LIKE ?)`;
            params.push(`%${q}%`, `%${q}%`, `%${q}%`);
        }
        
        if (minPrice) {
            query += ` AND i.price >= ?`;
            params.push(minPrice);
        }
        
        if (maxPrice) {
            query += ` AND i.price <= ?`;
            params.push(maxPrice);
        }
        
        if (location && location !== 'all') {
            query += ` AND si.city LIKE ?`;
            params.push(`%${location}%`);
        }
        
        query += ` ORDER BY i.created_at DESC`;
        
        const [rows] = await db.execute(query, params);
        res.json(rows);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: "Search failed" });
    }
});

// ==================== START SERVER ====================

initializeDatabase().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
        console.log(`🌐 Access your app at: http://localhost:${port}`);
        console.log(`👨‍💼 Vendor Dashboard: http://localhost:${port}/vendor/dashboard`);
        console.log(`🏪 Supplier Dashboard: http://localhost:${port}/supplier/dashboard`);
        console.log(`\n📊 Demo Login Credentials:`);
        console.log(`   Any username/password combination will work`);
        console.log(`   - Existing users (ID 1-5) will use their actual data`);
        console.log(`   - Non-existing users will default to user ID 4`);
    });
});
