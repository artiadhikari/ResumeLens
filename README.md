# ResumeLens

ResumeLens is a full-stack AI-powered resume builder that enables users to create, optimize, manage, and share professional resumes with real-time preview and AI assistance. It is designed to simulate modern SaaS resume platforms with intelligent content enhancement and modular resume building.

---

## Overview

ResumeLens provides a structured and intelligent resume-building experience where users can create multiple resumes, edit modular sections, and enhance content using AI. It supports real-time preview, public sharing, and export functionality, making it suitable for professional resume management and optimization.

---

## Features

* Full-stack SaaS-style resume builder
* AI-powered resume optimization using Google Gemini
* Modular resume sections (skills, experience, education, projects)
* Real-time preview system
* Public resume sharing via unique URLs
* PDF export functionality
* Image upload with background removal
* Multi-template resume system
* Secure authentication using JWT

---

## Tech Stack

### Frontend

* React.js (Vite)
* Redux Toolkit
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose
* JWT Authentication

### Integrations

* Google Gemini AI
* ImageKit
* REST APIs

---

## Architecture

The application follows a client-server architecture:

* Frontend: React-based single-page application with component-driven UI
* Backend: REST API built using Node.js and Express
* Database: MongoDB with Mongoose ODM
* AI Layer: Google Gemini API for content enhancement
* Media Storage: ImageKit for optimized image handling

---

## Environment Variables

### Backend

* MONGO_URI=your_mongodb_connection_string
* JWT_SECRET=your_jwt_secret
* GEMINI_API_KEY=your_google_gemini_api_key
* IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
* IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
* IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint

---

## Local Setup

### Clone the repository

git clone https://github.com/your-username/resumeLens.git

### Install dependencies

cd client
npm install

cd ../server
npm install

### Run the application

Start backend:

npm run server

Start frontend:

npm run dev

---

## Core Functionality

* Resume creation with modular sections
* AI-based content improvement and ATS optimization
* Real-time preview during editing
* Public resume sharing via unique links
* PDF export for offline use
* Image upload and optimization via CDN

---

## Future Enhancements

* ATS scoring system
* Resume analytics dashboard
* Job-specific AI tailoring
* DOCX export support
* Multi-language resume generation
* Advanced AI feedback system

---

## License

MIT License
