<h3 align="center">E-commerce App</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/seifsheikhelarab/ecommerce-app.svg)](https://github.com/seifsheikhelarab/ecommerce-app/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/seifsheikhelarab/ecommerce-app.svg)](https://github.com/seifsheikhelarab/ecommerce-app/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Ecommerce App: A basic online shopping platform built with Node.js, Express, and MongoDB.
    <br>
</p>

## Table of Contents

* [About](#about)
* [Purpose](#purpose)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Database Setup](#database-setup)
* [To-Do](#to-do)
* [License](#license)

## About

This ecommerce application is a comprehensive online shopping platform built using Node.js, Express, MongoDB, and EJS. The application provides a seamless and enjoyable shopping experience for customers, with features such as user authentication, product catalog, shopping cart, and order management.

## Purpose

The purpose of this application is to demonstrate a basic ecommerce platform using Node.js and MongoDB. The application is designed to be scalable and extensible, with a focus on providing a high-quality user experience.

## Features

The Ecommerce App has the following features:

* **User Registration**: Users can register for an account using a valid email address and password.
* **User Login**: Users can log in to their account using their email address and password.
* **User Profile**: Users can view and edit their profile information, including their name, email address, and past orders.
* **Product Catalog**: The app has a comprehensive product catalog that displays product information, including product name, description, price, and image.
* **Add to Cart**: Users can add products to their shopping cart.
* **View Cart**: Users can view the products in their shopping cart.
* **Remove from Cart**: Users can remove products from their shopping cart.
* **Place Order**: Users can place an order using the products in their shopping cart.
* **Order Summary**: Users can view a summary of their order, including the products, subtotal, tax, and total.
* **Order History**: Users can view their order history.
* **Password Hashing**: The app uses password hashing to secure user passwords.

## Installation

To set up the application on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/seifsheikhelarab/ecommerce-app.git`
2. Navigate to the project directory: `cd ecommerce-app`
3. Install all necessary dependencies: `npm install`
4. Create a `.env` file in the root directory and configure your environment variables
5. Start the application: `npm start` or use `npm run dev` for development mode

## Usage

1. Open your preferred web browser and visit `http://localhost:4000`
2. Explore the product listings and click on any product to view its details
3. Register as a new user or log in to access additional features
4. Add desired products to your shopping cart
5. Review your cart and proceed to checkout to place an order
6. Manage your account and your orders

## Project Structure

The project is structured as follows:

* `app.js`: The main server setup file
* `config/`: Directory containing configuration files for database, middleware, and routes
* `controllers/`: Directory containing controller files for user, order, and product management
* `models/`: Directory containing model files for user, order, and product data
* `views/`: Directory containing EJS template files for user interface
* `public/`: Directory containing static assets such as images and CSS files
* `routes/`: Directory containing route files for handling HTTP requests

## Database Setup

The application uses MongoDB as its database. To set up the database, follow these steps:

1. Install MongoDB on your local machine
2. Create a new database and add a user with read and write privileges
3. Update the `databaseSetup` function in `config/db.js` with your database credentials

## To-Do

* Improve Documentation using Postman
* Add Search, pagination and Filters
* Port to Typescript
* Improve Order management and tracking

## License

This application is open-source and available under the MIT License. For more information, refer to the LICENSE file.
