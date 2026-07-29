# 🌍 SUHACO - Sustainable Harvest Communities

**Sustainable Harvest Communities (SUHACO)** is a registered Community-Based Organization (CBO) operating in Kakuma Refugee Camp, Turkana County, Kenya. 

This repository contains the full-stack web application designed to empower refugees and vulnerable host communities through sustainable, community-led development. The platform features a modern, responsive public website for awareness and engagement, alongside a secure, robust Content Management System (CMS) for administrators.

---

## ✨ Features

### 🌐 Public Website
- **Home**: Professional landing page with mission statement and core interventions.
- **About Us**: Detailed organizational history, vision, mission, and core values.
- **What We Do**: Dedicated pages for Women Empowerment, Livelihood, Education, and Leadership.
- **Our Impact**: Public impact stories, news & events, leadership highlights, and annual reports (with secure donor-only download requests).
- **Get Involved**: Partnership inquiries, volunteer applications, job/volunteer opportunity listings, and a "Buy Me a Coffee" donation integration.
- **Contact**: Easy-to-use contact form and organizational details.

### 🔐 Admin CMS (Secure)
- **Authentication**: JWT-based secure login for staff.
- **Dashboard**: Overview of system status and quick stats.
- **Impact Stories**: Full CRUD operations with drag-and-drop image uploads (powered by Cloudinary).
- **News & Events**: Manage upcoming workshops, announcements, and community events.
- **Job & Volunteer Postings**: Create, edit, and publish opportunities with deadlines and requirements.
- **Image Gallery**: Centralized view of all uploaded media across the platform.
- **Site Settings**: Manage organization info, contact details, and social media links dynamically.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: Modern CSS-in-JS (Inline styles for zero-configuration reliability)
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer + Cloudinary API

---

## 📁 Project Structure

```text
HarvestCommunities/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # Route logic
│   │   ├── middlewares/     # Auth & error handling
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API endpoints
│   │   ├── utils/           # Helper functions
│   │   └── server.js        # App entry point
│   └── .env                 # Environment variables
│
├── frontend/                # React/Vite Client
│   ├── public/              # Static assets (images, logos)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React Context (Auth)
│   │   ├── layouts/         # Page wrappers (Navbar, Sidebar)
│   │   ├── pages/           # Public and Admin pages
│   │   ├── services/        # API configuration (Axios)
│   │   ├── App.jsx          # Main router
│   │   └── main.jsx         # React entry point
│   └── .env                 # Environment variables
│
└── README.md
