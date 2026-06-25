ResumeLens

ResumeLens is a full-stack AI-powered resume builder that enables users to create, optimize, manage, and share professional resumes with real-time preview and AI assistance. It is designed to simulate modern SaaS resume platforms with intelligent content enhancement and modular resume building.

Key Highlights
Full-stack SaaS-style resume builder
AI-powered resume optimization using Google Gemini
Modular resume sections (skills, experience, education, projects)
Real-time preview system
Public resume sharing via unique URLs
PDF export functionality
Image upload with background removal
Multi-template resume system
Secure authentication with JWT
System Architecture

ResumeLens follows a client-server architecture:

Frontend: React-based SPA with component-driven UI
Backend: REST API using Node.js + Express
Database: MongoDB with Mongoose ODM
AI Layer: Google Gemini API for resume enhancement
Media Storage: ImageKit for optimized image handling
Tech Stack
Frontend
React.js (Vite)
Redux Toolkit
Tailwind CSS
React Router DOM
Axios
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Integrations
Google Gemini AI
ImageKit
REST APIs
Core Features
Resume Builder
Create and manage multiple resumes
Section-based editing (experience, skills, education, projects)
Dynamic form rendering system
AI Optimization
Improve professional summaries
Enhance job descriptions
Generate ATS-optimized content
Provide structured improvement suggestions
Sharing & Export
Public resume URLs
PDF export support
Clean printable resume layouts
Media Handling
Profile image upload
Background removal
Optimized image delivery via CDN
Project Structure
Client
client/
  src/
    app/
      features/
        authSlice.js
        store.js
    assets/
    Components/
      home/
      templates/
      ResumePreview.jsx
      forms/
    configs/
    pages/
      Dashboard.jsx
      Home.jsx
      Layout.jsx
      Login.jsx
      Preview.jsx
      ResumeBuilder.jsx
    main.jsx
Server
server/
  controllers/
  models/
  routes/
  middlewares/
Getting Started
1. Clone Repository
git clone https://github.com/your-username/resumeLens.git
cd resumeLens
2. Install Dependencies

Frontend:

cd client
npm install

Backend:

cd server
npm install
3. Environment Variables

Create a .env file in the server directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
4. Run Application

Backend:

npm run server

Frontend:

npm run dev
Performance & Design Principles
Component-based architecture
Scalable backend structure (MVC pattern)
Separation of concerns (UI / logic / API layers)
Optimized API calls with Axios
Modular and reusable UI components
Future Enhancements
ATS score analysis engine
Resume performance analytics dashboard
Job-specific AI tailoring
DOCX export support
Advanced AI feedback scoring system
Multi-language resume generation
License

This project is licensed under the MIT License.
