# ResumeLens

ResumeLens is a full-stack resume builder application with a React/Vite frontend and an Express/MongoDB backend.

## Live deployments

- Frontend: https://resume-lens-ten.vercel.app/
- Backend API: https://resumelens-3.onrender.com

## Project structure

- `client/` - React + Vite frontend
- `server/` - Express backend

## Local setup

### 1. Install dependencies

```bash
cd server
npm install
cd ../client
npm install
```

### 2. Backend environment variables

Create a `.env` file in `server/` with:

```env
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
OPENAI_API_KEY=<your-openai-api-key>
OPENAI_BASE_URL=<your-openai-base-url>
OPENAI_MODEL=<your-openai-model>
IMAGEKIT_PUBLIC_KEY=<your-imagekit-public-key>
IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
IMAGEKIT_URL_ENDPOINT=<your-imagekit-url-endpoint>
```

### 3. Run locally

Backend:

```bash
cd server
npm start
```

Frontend:

```bash
cd client
npm run dev
```

The frontend uses `VITE_BASE_URL` to call the backend API. For local development, create `client/.env` with:

```env
VITE_BASE_URL=http://localhost:3000
```

## Deployment

### Frontend (Vercel)

- Deploy the `client/` directory
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:
  - `VITE_BASE_URL=https://resumelens-3.onrender.com`

### Backend (Render)

- Deploy the `server/` directory as a Web Service
- Start command: `npm start`
- Render will provide `PORT` automatically
- Required environment variables:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `OPENAI_API_KEY`
  - `OPENAI_BASE_URL`
  - `OPENAI_MODEL`
  - `IMAGEKIT_PUBLIC_KEY`
  - `IMAGEKIT_PRIVATE_KEY`
  - `IMAGEKIT_URL_ENDPOINT`

## Notes

- Ensure import paths match folder casing exactly (`Components/` vs `components/`) to avoid Linux/Vercel build failures.
- If the backend fails to start with `ERR_MODULE_NOT_FOUND`, check that your route imports use the exact controller filenames.

## Useful commands

```bash
cd server
npm start

cd client
npm run dev
npm run build
```
