Project Overview

The Contact Management Web App allows users to add and view contact details through a simple and clean user interface. The backend handles API requests and stores data in MongoDB Atlas, while the frontend is built using React.

This project was developed as part of an internship technical task to demonstrate understanding of MERN stack fundamentals.

Features

• Add new contacts (Name, Email, Phone, Message)
• View all stored contacts
• Remove contacts from the UI (React state based deletion)
• Backend REST API using Node.js and Express
• MongoDB Atlas cloud database integration
• Clean and responsive UI with CSS

Note:
Deletion is handled at the UI level to demonstrate React state management. The database entries remain unchanged unless the page is refreshed.

Technology Stack

Frontend
• React.js
• Axios
• CSS

Backend
• Node.js
• Express.js
• MongoDB Atlas
• Mongoose

Project Folder Structure

contact-management-app

backend
• models
• Contact.js
• routes
• contactRoutes.js
• server.js
• .env

frontend
• src
• components
• ContactForm.js
• ContactList.js
• api.js
• App.js
• App.css
• index.js

.gitignore
README

Installation and Setup

Step 1: Clone the Repository
git clone https://github.com/Prayanshi-Sinha/contact-management-app.git

cd contact-management-app

Step 2: Backend Setup
cd backend
npm install

Create a .env file with the following details:

MONGO_URI = your_mongodb_atlas_connection_string
PORT = 5000

Run backend server:
node server.js

Step 3: Frontend Setup
cd frontend
npm install
npm start

The application will run on http://localhost:3000

API Endpoints

GET
/api/contacts
Fetches all contact records

POST
/api/contacts
Adds a new contact

Key Learning Outcomes

• Understanding of MERN stack architecture
• RESTful API development using Express
• MongoDB Atlas cloud database usage
• React state management
• Frontend–backend integration using Axios

Future Enhancements

• Database-level delete and update operations
• Authentication and authorization
• Search and pagination functionality
• Improved UI/UX design
