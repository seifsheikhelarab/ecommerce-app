
<h3 align="center"><a href="https://ecommerce-app-nih.up.railway.app/">E-commerce App</a></h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/seifsheikhelarab/ecommerce-app.svg)](https://github.com/seifsheikhelarab/ecommerce-app/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/seifsheikhelarab/ecommerce-app.svg)](https://github.com/seifsheikhelarab/ecommerce-app/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  E-commerce App: A robust online shopping platform built with Node.js, Express, MongoDB, and EJS. Designed to provide a seamless shopping experience with features like user authentication, product management, shopping cart, and order tracking.
  <br>
</p>

## Table of Contents

- [About](#about)
- [Purpose](#purpose)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [License](#license)

## About

This E-commerce application is a fully functional online shopping platform built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It provides a user-friendly interface for customers to browse products, manage their shopping cart, and place orders. The application is designed to be scalable, secure, and easy to extend for additional features.

## Purpose

The purpose of this project is to demonstrate how to build a modern e-commerce platform using popular web technologies. It serves as a learning resource for developers and a foundation for building more complex e-commerce solutions.

## Features

The E-commerce App includes the following features:

- **User Authentication**:
  - User registration and login with email and password.
  - Password hashing for secure storage.
- **User Profile Management**:
  - View and edit profile information (name, email, etc.).
  - View order history.
- **Product Catalog**:
  - Browse products with details like name, description, price, and images.
- **Shopping Cart**:
  - Add, view, and remove products from the cart.
- **Order Management**:
  - Place orders and view order summaries.
  - Track order history.
- **Admin Features** (To be implemented):
  - Add, update, and delete products.
  - Manage user accounts and orders.

## API Documentation

For detailed API documentation, refer to the [Postman Collection](https://documenter.getpostman.com/view/38348561/2sAYX2NjE7).

## Installation

To set up the application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/seifsheikhelarab/ecommerce-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ecommerce-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory (.env.example is provided).
   - Add the following variables:

     ```env
     PORT=4000
     MONGODB_URI=mongodb://localhost:27017/ecommerce
     SESSION_SECRET=your-secret-key
     ```

5. **Start the application**:
   - For production:

     ```bash
     npm start
     ```

   - For development (with hot-reloading):

     ```bash
     npm run dev
     ```

6. **Access the app**:
   - Open your browser and visit `http://localhost:4000`.

## Usage

1. **Browse Products**:
   - Visit the homepage to explore the product catalog.
2. **Register/Login**:
   - Create an account or log in to access additional features.
3. **Add to Cart**:
   - Click on any product to view details and add it to your cart.
4. **Checkout**:
   - Review your cart and proceed to checkout to place an order.
5. **Manage Account**:
   - Update your profile and view your order history.

## Project Structure

The project is organized as follows:

```
ecommerce-app/
├── app.js                # Main application entry point
├── config/               # Configuration files (database, middleware, etc.)
├── controllers/          # Logic for handling requests (users, products, orders)
├── models/               # Database models (User, Product, Order)
├── routes/               # Route definitions for API endpoints
├── views/                # EJS templates for rendering pages
├── public/               # Static assets (CSS, images, JavaScript)
├── .env                  # Environment variables
├── .gitignore            # Files and directories to ignore in Git
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Database Setup

The application uses **MongoDB** as its database. Follow these steps to set it up:

1. Install MongoDB on your local machine or use a cloud service like MongoDB Atlas.
2. Update the `MONGODB_URI` in the `.env` file with your database connection string.
3. Start the MongoDB server:

   ```bash
   mongod
   ```

4. The application will automatically create the necessary collections when it starts.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
