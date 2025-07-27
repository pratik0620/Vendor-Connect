-- Insert sample data for first 2 vendors and suppliers only
USE vendorsupply;

-- Insert vendor info for ID 1 and 2
INSERT INTO VendorInfo (vendor_id, business_name, vendor_address, city, state_name, contact, latitude, longitude) VALUES
(1, 'Rajesh Food Stall', 'Dadar West Market', 'Mumbai', 'Maharashtra', '+91 98765 43210', 19.0176, 72.8433),
(2, 'Anita Snacks Corner', 'Bandra East Station', 'Mumbai', 'Maharashtra', '+91 98765 43211', 19.0596, 72.8295);

-- Insert supplier info for ID 1 and 2
INSERT INTO SupplierInfo (supplier_id, business_name, supplier_address, city, state_name, contact, latitude, longitude) VALUES
(1, 'Ganesh Trading Co.', 'Crawford Market', 'Mumbai', 'Maharashtra', '+91 98765 43215', 18.9467, 72.8342),
(2, 'Fresh Vegetables Ltd.', 'Andheri Market', 'Mumbai', 'Maharashtra', '+91 98765 43216', 19.1136, 72.8697);

-- Insert sample inventory items for first 2 suppliers
INSERT INTO Inventory (supplier_id, item_name, price, unit, date, last_date) VALUES
-- Supplier ID 1 (Ganesh Trading)
(1, 'Potato', 35.00, 'kg', '2024-01-01', '2024-01-15'),
(1, 'Onion', 40.00, 'kg', '2024-01-01', '2024-01-10'),
(1, 'Tomato', 60.00, 'kg', '2024-01-01', '2024-01-05'),
(1, 'Ginger', 120.00, 'kg', '2024-01-01', '2024-01-20'),

-- Supplier ID 2 (Fresh Vegetables)
(2, 'Capsicum', 75.00, 'kg', '2024-01-01', '2024-01-07'),
(2, 'Carrot', 45.00, 'kg', '2024-01-01', '2024-01-12'),
(2, 'Beetroot', 50.00, 'kg', '2024-01-01', '2024-01-10'),
(2, 'Cabbage', 25.00, 'kg', '2024-01-01', '2024-01-08');

-- Insert some sample orders
INSERT INTO OrderTable (vendor_id, supplier_id, item_id, quantity, total_price, date, status) VALUES
(1, 1, 1, 10, 350.00, '2024-01-20', 'delivered'),
(1, 1, 3, 5, 300.00, '2024-01-21', 'pending'),
(2, 2, 5, 3, 225.00, '2024-01-19', 'approved');

SELECT 'Sample data inserted successfully for first 2 vendors and suppliers!' AS message;
