🛒 ShoppyGlobe Backend API

A fully functional E-commerce Backend API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

This project implements product management, user authentication, and protected cart functionality.

🚀 Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (jsonwebtoken)

bcryptjs

ThunderClient (API Testing)

📂 Project Structure
shoppyglobe-backend/
│
├── config/
│     └── db.js
├── models/
│     ├── product.model.js
│     ├── user.model.js
│     └── cart.model.js
├── controllers/
│     ├── product.controller.js
│     ├── auth.controller.js
│     └── cart.controller.js
├── routes/
│     ├── product.routes.js
│     ├── auth.routes.js
│     └── cart.routes.js
├── middleware/
│     └── auth.middleware.js
├── server.js
├── .env
└── package.json


⚙️ Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/lohithkumark/shoppy_globe_backend.git

cd shoppyglobe-backend


2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file in root directory:

PORT=3001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start Server
npm start

Server runs at:

http://localhost:3001
📦 API Endpoints
🛍 Products APIs
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get single product
POST	/products	Create new product
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product
🔐 Authentication APIs
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user & get JWT
🛒 Cart APIs (Protected)

⚠ Requires Authorization header:

Authorization: Bearer <token>
Method	Endpoint	Description
GET	/cart	View user cart
POST	/cart	Add product to cart
PUT	/cart/:id	Update cart item
DELETE	/cart/:id	Remove item from cart
🔐 Authentication Flow

Register user

Login user → Receive JWT token

Send token in Authorization header

Access protected cart routes

🧪 API Testing

Tested using:

ThunderClient (VS Code)

JSON body format

Authorization Bearer token

🛡 Security Features

Password hashing using bcrypt

JWT-based authentication

Protected routes using middleware

Environment variable protection

🎯 Features Implemented

✅ Products CRUD
✅ User Registration
✅ User Login
✅ JWT Authentication
✅ Protected Cart APIs
✅ MongoDB Atlas Integration
✅ Modular Folder Structure
✅ Proper Error Handling

📌 Future Improvements

Add product stock validation

Add pagination

Add admin role authorization

Deploy to cloud (Render / Railway)

👨‍💻 Author

Lohith Kumar K

Backend Developer | MERN Stack Learner