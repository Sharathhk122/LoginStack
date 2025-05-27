
# 🔐 LoginStack — MERN Authentication App with Real-Time Email OTP Verification

LoginStack is a full-featured authentication system built with the **MERN Stack** (MongoDB, Express, React, Node.js). It includes **real-time email verification** using a 6-digit OTP sent to the user’s email during signup. This is perfect for secure and modern authentication needs.

<br/>

![LoginStack Screenshot](https://github.com/Sharathhk122/LoginStack/blob/main/Screenshot%20(997).png).

---

## 🚀 Live Demo
Coming soon...

---

## 📦 Tech Stack

- **Frontend**: React, Axios, React Router DOM
- **Backend**: Node.js, Express, MongoDB
- **Email Service**: Nodemailer (Gmail SMTP)
- **Database**: MongoDB (Local or Cloud)

---

## ✨ Features

- ✅ **User Signup with Email**
- ✅ **Real-time Email OTP Verification (6-digit)**
- ✅ **Secure Login with JWT Authentication**
- ✅ **Password Hashing with bcrypt**
- ✅ **Session-based and Token-based Auth Options**
- ✅ **Responsive and Clean UI**
- ✅ **Backend and Frontend Fully Separated**
- ✅ **Reusable Toast Notifications**
- ✅ **`.env` Config File for Secrets**

---

## 🧪 OTP Email Verification Flow

1. User signs up → provides email & password
2. System sends 6-digit OTP to user’s email (via Gmail SMTP)
3. User enters OTP → system verifies it
4. Account created only after successful OTP verification

> 🔐 Makes sure only real users with valid email can register

---

## 📁 Project Structure

```

LoginStack/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
└── README.md

````

---

## ⚙️ Setup Instructions

### 🧑‍🍳 Backend Setup

```bash
cd backend
npm install
````

> Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your email app passaword it is there in google go and search
```

> Start the backend server:

```bash
npm start
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

### 🔐 Signup Page

![Signup Screenshot](https://github.com/Sharathhk122/LoginStack/blob/main/Screenshot%20(997).png)

### 📥 OTP Verification

![OTP Screenshot](https://github.com/Sharathhk122/LoginStack/blob/main/Screenshot%20(998).png)

### 🔓 Login Page

![Login Screenshot](https://github.com/Sharathhk122/LoginStack/blob/main/Screenshot%20(999).png)

---

## 🌐 API Endpoints

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/api/signup`     | Register a new user           |
| POST   | `/api/verify-otp` | Verify 6-digit OTP            |
| POST   | `/api/login`      | Authenticate user credentials |

---

## 🛡️ Security Notes

* Emails & passwords are encrypted
* OTPs expire after a few minutes
* Secrets are stored in `.env`
* Passwords are hashed using `bcrypt`

---

## 📌 Future Enhancements

* 🔁 Forgot Password with OTP
* 📲 Two-Factor Authentication (2FA)
* 🔔 Email Notification UI Feedback
* 🔐 Admin Dashboard for User Management

---

## 🙌 Author

**Sharath H K**
📧 [sharathhk40@gmail.com](mailto:sharathhk40@gmail.com)
🔗 [GitHub - @Sharathhk122](https://github.com/Sharathhk122)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

> ⚠️ Make sure to **keep your real `EMAIL_PASS` secret** in production. Use environment variables securely and consider using OAuth or services like SendGrid for real-world applications.

```

---

## 📦 Deliverables

✅ Includes all the features  
✅ `.env` config clearly mentioned  
✅ All setup steps  
✅ Screenshot placeholders  
✅ Future roadmap  
✅ Author & contact section


```
