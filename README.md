# Project Overview

This project integrates a robust backend using **Hono** and **Prisma** with a dynamic frontend built with **React** and **Tailwind CSS**.

## 🌟 Backend Features

- **User Authentication**:
  - **Endpoints**: 
    - `POST /signup`: User registration.
    - `POST /signin`: User login with JWT for secure access.

- **Blog Management**:
  - **Endpoints**: 
    - `POST /create`: Create a blog post.
    - `GET /getblog/:id`: Retrieve a single blog post.
    - `GET /getblogs`: Retrieve all blog posts.
    - `GET /userblog`: Retrieve blogs by a user.

- **Message Handling**: 
  - Real-time communication with message routing.

- **Database**: 
  - Utilizes **Prisma ORM** for data management, connected to **SQLPrisma Avion** database.

- **CORS Support**: 
  - Enables cross-origin requests for seamless integration.

- **Error Handling**: 
  - Comprehensive error management for unauthorized access and server errors.

## 🎨 Frontend Features

- **Responsive Design**:
  - Beautiful mobile-friendly interface using **Tailwind CSS**.

- **Dynamic Components**:
  - User-friendly components for signup/login, blog creation, and messaging.

- **Navigation**:
  - Responsive navigation bar with smooth transitions and user-friendly layout.

- **Enhanced UI**:
  - Stylish forms and buttons with animations for improved user experience.

- **Weather UI Component**:
  - Fetches and displays weather data in an appealing format.

## 🚀 Deployment

- **Backend**: Deployed on **SQLPrisma Avion** database, utilizing **Hono** for the routing framework and **Prisma** for database management.
- **Frontend**: Deployed on **Vercel**. Access it at: **`https://<your-frontend-url>`**. Ensure to replace `<your-frontend-url>` with your actual frontend deployment URL.

## 🛠 Setup Instructions

1. Clone the repository.
2. Set up environment variables for the backend: `DATABASE_URL`, `JWT_SECRET`.
3. Install backend dependencies:
   ```bash
   npm install
