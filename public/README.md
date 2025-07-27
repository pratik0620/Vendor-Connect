# VendorConnect

A web application for connecting street food vendors with suppliers.

## File Structure

- `index.html` - Landing page with links to vendor and supplier dashboards
- `landing.js` - JavaScript functionality for the landing page
- `login.html` - Login page with authentication form
- `login.js` - JavaScript functionality for the login page
- `vendor.html` - Vendor dashboard page
- `vendor.js` - JavaScript functionality for the vendor dashboard
- `supplier.html` - Supplier dashboard page
- `supplier.js` - JavaScript functionality for the supplier dashboard
- `style.css` - Application styling

## How It Works

1. **Landing Page**: Users start at `index.html` which provides links to both dashboards
2. **Login Flow**: Users can go to `login.html` to authenticate
3. **Role-based Access**: After login, users are redirected to their specific dashboard:
   - Vendors → `vendor.html`
   - Suppliers → `supplier.html`
4. **Authentication**: Each dashboard checks for proper authentication and role
5. **Logout**: Users can logout and will be redirected back to the login page

## Features

- Multi-language support (English, Hindi, Marathi)
- Separate dashboards for vendors and suppliers
- Role-based authentication and access control
- Responsive design with Bootstrap
- Local storage for session management

## Getting Started

1. Open `index.html` in a web browser
2. Click on "Vendor Dashboard" or "Supplier Dashboard" to access the respective dashboard
3. If not logged in, you'll be redirected to the login page
4. Enter any username/password (demo mode)
5. Select your role (Vendor or Supplier)
6. Click Login to access the dashboard

## Demo Mode

This is a demo application where any username/password combination will work for authentication.

## Dashboard Access

- **Vendor Dashboard**: Access inventory management, price comparison, supplier listings, and group purchases
- **Supplier Dashboard**: Access product catalog, order management, reviews, and business profile 