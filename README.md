# 🚗 Second-Hand Vehicle E-Commerce Website

A full-stack web application that allows users to **buy and sell second-hand vehicles online**, with dedicated dashboards for buyers, sellers, and an admin panel.

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Other Tools**: XAMPP/phpMyAdmin, Multer (for image upload), Fetch API

---

## 👥 User Roles

- **Buyer**: Can browse vehicles and contact sellers.
- **Seller**: Can post, view, and delete their own vehicles.
- **Admin**: Can manage users and vehicles.

---

## ✨ Key Features

- 🔐 User Signup/Login with role-based navigation
- 🧾 Role-based dashboards (Buyer, Seller, Admin)
- 📸 Upload and display vehicle images using Multer
- 📤 Post, view, and delete second-hand vehicles
- 📬 Contact sellers via message form
- 🛡️ Admin panel to manage all users and listings
- 📱 Responsive UI design for mobile/tablet/desktop

---

## 📂 Project Structure

Vehicle-ecommerce-website/

├── client/ # Frontend files (HTML, CSS, JS)

│ ├── index.html # Homepage

│ ├── login.html # Login Page

│ ├── signup.html # Signup Page

│ ├── dashboard.html # Buyer Dashboard

│ ├── seller-dashboard.html # Seller Dashboard

│ ├── admin-dashboard.html # Admin Panel

│ ├── vehicle-detail.html # Vehicle detail + Contact seller

│ ├── post-vehicle.html # Seller post form

├── server/ # Backend (Node.js + Express)

│ ├── index.js # Main server file

│ ├── config/

│ │ └── db.js # MySQL DB connection config

│ ├── routes/

│ │ ├── auth.js # Signup/login API

│ │ ├── vehicles.js # Vehicle APIs

│ │ ├── messages.js # Contact seller messages

│ │ ├── admin.js # admin panel

│ ├── uploads/ # Uploaded images (Multer)

│ ├── middelare/ 

│ │ ├── upload.js # uploads API

├── .gitignore # Ignore node_modules, uploads etc.

├── README.md # Project documentation

└── package.json # Node dependencies and scripts

## 🚀 Installation & Setup Guide

This guide will help you run the Vehicle E-Commerce Website locally on your system. The project includes a frontend built with HTML/CSS/JS and a backend using Node.js, Express, and MySQL.

---
### 🧰 Prerequisites

Make sure you have the following installed:

- ✅ [Node.js](https://nodejs.org/) (v18+ recommended)
- ✅ [XAMPP](https://www.apachefriends.org/) (includes MySQL + phpMyAdmin)
- ✅ A code editor (like [VS Code](https://code.visualstudio.com/))
- ✅ Live Server extension (for serving HTML frontend)

---

# 🚗 Vehicle Store - Second-Hand Vehicle E-Commerce Website


---

## ⚙️ Installation Steps

bash
### Step 1: Clone the repository
git clone https://github.com/your-username/Vehicle-ecommerce-website.git

### Step 2: Navigate into project
cd Vehicle-ecommerce-website

### Step 3: Install backend dependencies
cd server
npm install

### Step 4: Start backend server
node index.js

### Step 5: Open frontend
Open index.html inside the /client folder in browser

**🛑 Note: Make sure MySQL is running locally and you have imported the database.**

---

### 📸 Output Screenshots
All screenshots are located in the client/assets/ folder. Here are the key output files:

| Page             | Screenshot File                                      |
| ---------------- | ---------------------------------------------------- |
| Home             | `homepage.jpg`                                       |
| Sign Up          | `signup.png`                                         |
| Login            | `login.png`                                          |
| Buyer Dashboard  | `dashboard1.png`, `dashboard2.png`, `dashboard3.png` |
| Post Vehicle     | `postvehicle.png`, `postvehicle2.png`                |
| Vehicle Details  | `vehicledetil.jpg`, `vehicledetail2.jpg`             |
| Seller Dashboard | `seller1.png`, `seller2.png`, ...                    |
| Admin Panel      | `admin1.png`, `admin2.png`                           |

You can open these manually from the assets folder to view UI output.

### ✅ Conclusion
This project demonstrates a complete second-hand vehicle e-commerce platform with essential features like vehicle posting, browsing, seller contact, admin management, and role-based dashboards. It’s responsive and suitable for real-world scenarios.

### 💡 Future Enhancements
💳 Integrate a payment gateway

🔍 Advanced search & filters

🖼️ Multiple images per vehicle

✅ Seller verification system

📊 Admin analytics dashboard

## 🙋‍♀️ Author

👩‍💻 **Devi Sri**  

🔗 [GitHub Profile](https://github.com/devisri4)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

