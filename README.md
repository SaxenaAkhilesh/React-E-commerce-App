# React E-commerce Application

##  Project Overview

This is a modern E-commerce Frontend Application built using React + TypeScript.
The application allows users to browse products, search items, view product details, and manage a shopping cart with a smooth user experience.






---

##  Features

*  *Home Page*

  * Displays product listing from API
  * Responsive grid layout
  * Clean UI with Tailwind CSS

*  *Search Functionality*

  * Search by *title, description, category, and price
  * Debounced search for better performance

*  *Product Details Page*

  * Dynamic routing using product ID
  * Shows image, title, price, category, and description

*  *Cart Drawer (Sidebar)*

  * Opens from right side
  * Add to cart functionality
  * Increase / Decrease quantity
  * Remove items
  * Total price calculation
  * Shows total items count

* *Persistence*

  * Cart data stored in **localStorage**

*  **UI/UX**

  * Fully responsive design
  * Smooth transitions and clean layout






---

##  Tech Stack

* React
* TypeScript
* Context API (State Management)
* Tailwind CSS
* Axios (API calls)
* React Router DOM






---

##  Project Setup Instructions

### 1 Clone Repository

cmd
git clone https://github.com/your-username/your-repo-name.git


### 2 Navigate to Project

cmd
cd your-repo-name


### 3 Install Dependencies

cmd
npm install


### 4 Run Project

cmd
npm start


 The app will run on:


http://localhost:3000





---

## ⚙️ Environment Setup

Before running the project, create a `.env` file in the root directory.

### 📄 Steps:

1. Create a file named `.env` in the project root.

2. Add the following variable:
PRODUCT_API_BASE_URL=https://api.escuelajs.co/api/v1

##  API Used

* Fake Store API
* Base URL: https://api.escuelajs.co/api/v1






---

##  Pages Overview

###  Home Page

* Product grid view
* Search bar
* Add to Cart button

### Product Details Page

* Product image
* Title, price, category
* Description
* Add to Cart

### Cart Drawer

* Sidebar cart UI
* Quantity management
* Remove item
* Total calculation




---

##  Notes

* The initial Context API structure was set up with guidance from ChatGPT.
* All business logic, implementation, and feature development were written and handled by me.
* Sorting functionality is not implemented due to time constraints.










---
##  Future Improvements

* Checkout flow
* Payment integration
* Product filters (category, price range)
* Animations & transitions
* Wishlist feature


---

##  Author

Developed by Akhilesh Saxena
