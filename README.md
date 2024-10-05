Project Overview


This project integrates a robust backend using Hono and Prisma with a dynamic frontend built with React and Tailwind CSS.

Backend Features
User Authentication:

User registration (/signup) and login (/signin) endpoints with JWT for secure access.
Blog Management:

Create, retrieve, and delete blog posts with endpoints: /create, /getblog/:id, /getblogs, and /userblog.
Message Handling:

Integration of message routing for real-time communication.
Database:

Utilizes Prisma ORM connected via environment variable for data management.
CORS Support:

Implements CORS to enable cross-origin requests.
Error Handling:

Comprehensive error handling for unauthorized access and server errors.
Frontend Features
Responsive Design:

Utilizes Tailwind CSS for a mobile-friendly interface.
Dynamic Components:

Includes components for user signup/login, blog creation, and real-time messaging.
Navigation:

Implemented a responsive navigation bar with smooth transitions.
Enhanced UI:

Beautifully styled components, including forms and buttons, with animations.
Weather UI Component:

Fetches and displays weather data with a visually appealing interface.
Deployment
The backend is deployed and accessible at: https://<your-backend-url>. Ensure to replace <your-backend-url> with your actual backend deployment URL.

Setup Instructions
Clone the repository.
Set up environment variables for the backend: DATABASE_URL, JWT_SECRET.
Install backend dependencies: npm install.
Start the backend server.
For the frontend, navigate to the frontend directory and run npm install followed by npm start.
