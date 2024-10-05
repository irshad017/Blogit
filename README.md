# BlogIt - A Blogging Platform

Visit the live website: [BlogIt](https://blogit-two.vercel.app/)

## Project Overview

This project integrates a robust backend using **Hono** and **Prisma** with a dynamic frontend built with **React** and **Tailwind CSS**. 

The platform is designed like **Medium**, where users can post blogs, read blogs from others, and engage in personal chats.

## 🌟 Backend Features

- **User Authentication**:
  - `POST /signup`: User registration.
  - `POST /signin`: User login with JWT for secure access.

- **Blog Management**:
  - `POST /create`: Create a blog post.
  - `GET /getblog/:id`: Retrieve a single blog post.
  - `GET /getblogs`: Retrieve all blog posts.
  - `GET /userblog`: Retrieve blogs by a user.

- **Message Handling**: Real-time communication with message routing.

- **Database**: Utilizes **Prisma ORM** for data management, connected to **SQLPrisma Avion** database.

- **CORS Support**: Enables cross-origin requests for seamless integration.

- **Error Handling**: Comprehensive error management for unauthorized access and server errors.

## 📦 Libraries & Technologies Used

### 1. **Hono**
   - Fast, small web framework for building APIs.
   - **[Hono Documentation](https://hono.dev/)**

### 2. **Prisma**
   - Modern ORM tool to interact with SQL databases.
   - **Commands**:
     - `npx prisma migrate dev` - Apply schema changes.
     - `npx prisma generate` - Generate Prisma client.
   - **[Prisma Documentation](https://www.prisma.io/docs/)**

### 3. **@prisma/client**
   - Auto-generated Prisma client for type-safe database queries.

### 4. **bcrypt**
   - Hashes passwords for secure authentication.
   - **Installation**:
     ```bash
     npm install bcrypt
     ```

### 5. **dotenv**
   - Loads environment variables from `.env` file to secure sensitive data.
   - **Installation**:
     ```bash
     npm install dotenv
     ```

### 6. **Typescript**
   - Provides static typing for better code quality and error prevention.
   - **Installation**:
     ```bash
     npm install typescript
     ```

### 7. **CORS Middleware**
   - Enables Cross-Origin Resource Sharing for secure integration between frontend and backend.

### 8. **JWT (JSON Web Token)**
   - Used for secure authentication, managing session tokens across requests.

## 🎨 Frontend Features

- **Responsive Design**:
  - Mobile-friendly interface using **Tailwind CSS**.

- **Dynamic Components**:
  - User-friendly signup/login, blog creation, and messaging.

- **Blog and Chat Functionality**:
  - Users can post blogs, read others' blogs, and chat personally.

- **API Integration**:
  - Fetches backend data using **Axios** for seamless interaction.

- **Navigation**:
  - Responsive navigation bar with smooth transitions.

- **Enhanced UI**:
  - Stylish forms and buttons with animations.

- **Weather UI Component**:
  - Fetches and displays weather data in a visually appealing format.

## 🚀 Deployment

- **Backend**: Deployed on **SQLPrisma Avion** database, utilizing **Hono** and **Prisma**.
- **Frontend**: Deployed on **Vercel**. Access it here: **[BlogIt](https://blogit-two.vercel.app/)**.

## 🛠 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/project-name.git
