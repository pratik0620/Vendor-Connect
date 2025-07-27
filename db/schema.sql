-- Create Database
CREATE DATABASE vendorsupply;

-- Use the Database
USE vendorsupply;

-- Vendors Table
CREATE TABLE Vendor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Suppliers Table
CREATE TABLE Supplier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Vendor Information
CREATE TABLE VendorInfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendor_id INT NOT NULL,
    business_name TEXT,
    vendor_address TEXT,
    city VARCHAR(50),
    state_name VARCHAR(50),
    contact VARCHAR(15),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    FOREIGN KEY (vendor_id) REFERENCES Vendor(id)
);

-- Supplier Information
CREATE TABLE SupplierInfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    supplier_id INT NOT NULL,
    business_name TEXT,
    supplier_address TEXT,
    city VARCHAR(50),
    state_name VARCHAR(50),
    contact VARCHAR(15),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    FOREIGN KEY (supplier_id) REFERENCES Supplier(id)
);

-- Inventory
CREATE TABLE Inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    supplier_id INT NOT NULL,
    item_name VARCHAR(100),
    price DECIMAL(10, 2),
    unit VARCHAR(20),
    date DATE,
    last_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES Supplier(id)
);

-- Vendor List (frequent items)
CREATE TABLE VendorList (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendor_id INT NOT NULL,
    item_id INT NOT NULL,
    date DATE,
    FOREIGN KEY (vendor_id) REFERENCES Vendor(id),
    FOREIGN KEY (item_id) REFERENCES Inventory(id)
);

-- Orders Table
CREATE TABLE OrderTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendor_id INT NOT NULL,
    supplier_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2),
    date DATE,
    status ENUM('pending', 'approved', 'delivered') DEFAULT 'pending',
    FOREIGN KEY (vendor_id) REFERENCES Vendor(id),
    FOREIGN KEY (supplier_id) REFERENCES Supplier(id),
    FOREIGN KEY (item_id) REFERENCES Inventory(id)
);

-- Shipping Table
CREATE TABLE Shipping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    vendor_id INT NOT NULL,
    status VARCHAR(50),
    delivery_date DATE,
    shipping_address TEXT,
    shipping_city TEXT,
    shipping_state TEXT,
    FOREIGN KEY (order_id) REFERENCES OrderTable(id),
    FOREIGN KEY (vendor_id) REFERENCES Vendor(id)
);
