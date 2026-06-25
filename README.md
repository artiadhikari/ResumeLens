ResumeLens

ResumeLens is a full-stack AI-powered resume builder that helps users create, optimize, and manage professional resumes with real-time preview and AI assistance.

Key Features
Full-stack SaaS-style resume builder
AI-powered resume optimization (Google Gemini)
Modular sections (skills, experience, education, projects)
Real-time resume preview
Public resume sharing via unique URL
PDF export support
Image upload with background removal (ImageKit)
Multiple resume templates
Secure authentication (JWT)
Tech Stack

Frontend: React (Vite), Redux Toolkit, Tailwind CSS, React Router, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Integrations: Google Gemini AI, ImageKit

Architecture
Frontend: React SPA
Backend: REST API (Node + Express)
Database: MongoDB
AI Layer: Google Gemini API
Media Storage: ImageKit CDN
Project Structure
client/
  src/
    components/
    pages/
    assets/
    configs/
    app/

server/
  controllers/
  models/
  routes/
  middlewares/
Setup
1. Clone Repo
git clone https://github.com/your-username/resumeLens.git
cd resumeLens
2. Install Dependencies

Frontend

cd client
npm install

Backend

cd server
npm install
3. Environment Variables

Create .env in server/:

MONGO_URI=
JWT_SECRET=
GEMINI_API_KEY=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
4. Run Project

Backend

npm run server

Frontend

npm run dev
Future Improvements
ATS score analysis
Resume analytics dashboard
Job-specific AI tailoring
DOCX export
Multi-language support
License

MIT License
