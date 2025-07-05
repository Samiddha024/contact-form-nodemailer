
# 📬 Contact Form with Nodemailer (React + Node.js)

A simple and elegant Contact Us form built with React (Vite) frontend and Node.js backend using Nodemailer for email handling.

This project is plug-and-play: you can integrate the backend and frontend into your own app to quickly set up a contact page that **sends emails** and optionally **auto-replies**.

---

## 🚀 Features

- Beautiful, responsive React contact form
- Backend with Express and Nodemailer
- Sends user message to admin inbox
- Supports auto-reply setup (optional)
- Environment variable support via `.env`
- MongoDB for message storage (optional)

---

## 📁 Project Structure

```

EmailProject/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   └── src/
├── .gitignore
└── README.md

````

---

## ⚙️ Environment Variables (`.env` for backend)

```env
# MongoDB connection string
MONGO_URI=mongodb://127.0.0.1:27017/emaildb

# Express server port
PORT=5000

# Nodemailer configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=        # Sender Gmail (must be app-password enabled)
EMAIL_PASS=            # Gmail App Password (NOT your actual password)
EMAIL_TO=           # Destination email (e.g., your admin inbox)
````

> 🔐 **Important:** Never share your `.env` file or real credentials publicly. Use `.gitignore` to prevent it from being pushed.

---

## 🧪 API Endpoint

### POST `/api/contact`

**Description**: Sends a message via email to the admin inbox.

#### Body Parameters (JSON)

```json
{
  "name": "Sam",
  "email": "your_gmail",
  "subject": "Demo",
  "message": "This is a test message"
}
```

#### Response

```json
{
  "message": "Message sent successfully ✉️"
}
```

---

## 🖥️ Local Setup

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

Make sure MongoDB is running locally.

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Tech Stack

* **Frontend**: React (Vite), Tailwind CSS
* **Backend**: Node.js, Express, Nodemailer, Mongoose
* **Mail**: SMTP (Gmail)




