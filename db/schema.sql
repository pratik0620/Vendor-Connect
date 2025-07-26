-- Create Database
CREATE DATABASE vendorsupply;

-- Use the Database
USE vendorsupply;

-- Create Vendors Table
CREATE TABLE Vendor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Create Suppliers Table
CREATE TABLE Supplier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);