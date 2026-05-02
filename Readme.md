# GlowMart – Multi Vendor E-Commerce Platform

GlowMart is a full-stack MERN e-commerce web application developed as part of the internship project at Thaniya Technologies. The platform allows customers to browse and purchase products online while enabling vendors to manage their own product listings through a dedicated dashboard.

---

# Project Objective

The main objective of this project is to create a scalable and user-friendly multi-vendor e-commerce platform using the MERN stack.

The system helps:
- Customers browse and purchase products easily
- Vendors manage products efficiently
- Administrators monitor platform activities

---

# Technologies Used

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT Authentication
- bcryptjs

## Development Tools
- VS Code
- Git & GitHub
- Postman

---

# Features

## Customer Module
- User Registration & Login
- Browse Products
- View Product Details
- Add Products to Cart
- Responsive User Interface

## Vendor Module
- Vendor Registration
- Add New Products
- Manage Product Listings
- Vendor Dashboard

## Admin Module
- Manage Users
- Manage Products
- Platform Monitoring

---

# Project Structure

```bash
GlowMart/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md

Installation and Setup
Clone Repository
git clone https://github.com/YOUR_USERNAME/glowmart.git

Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

Backend Setup
cd server
npm install
npm start

Backend runs on:
http://localhost:5000

Environment Variables

Create a .env file inside the server folder:

MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
Database Collections

The project uses MongoDB collections for:

Users
Products
Orders
Vendors

API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

Products

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | /api/products     | Get Products   |
| POST   | /api/products     | Add Product    |
| DELETE | /api/products/:id | Delete Product |

Future Enhancements
Payment Gateway Integration
Product Reviews & Ratings
Wishlist Feature
Order Tracking
AI-based Product Recommendations
Mobile Application

Learning Outcome

Through this project, practical knowledge was gained in:

Full-stack MERN development
REST API creation
MongoDB database management
JWT authentication
Frontend-backend integration
Responsive UI design
GitHub version control

Developed By
Ananya K S
USN: 4SF22CS026
Sahyadri College of Engineering and Management

