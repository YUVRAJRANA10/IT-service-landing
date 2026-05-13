# IT Service Landing Page (MERN)

A modern, responsive landing page with a full MERN backend to capture contact inquiries.

## Features

- Floating glassmorphism navbar with smooth scroll
- Animated hero section (Framer Motion)
- Services cards with hover effects
- Technology stack tabs
- Contact form with validation and toasts
- Admin dashboard at `/admin`
- Express API with MongoDB Atlas persistence

## Tech Stack

- Frontend: React (Vite), Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas

## Project Structure

```
backend/
frontend/
```

## Setup

### 1) Backend

```bash
cd backend
cp .env.example .env
# Update MONGO_URI with your MongoDB Atlas connection string
npm install
npm run dev
```

### 2) Frontend

```bash
cd frontend
cp .env.example .env
# Update VITE_API_URL if the backend is not on http://localhost:5000
npm install
npm run dev
```

## API Endpoints

- `POST /api/contact` - Save contact form submissions
- `GET /api/contact/getContactInfo` - Fetch all contact submissions

## Admin Dashboard

Open `http://localhost:5173/admin` to view submissions.

## Notes

- Provide MongoDB Atlas credentials in `backend/.env`.
- Screenshots and hosted URLs can be added for submission.
