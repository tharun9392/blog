# Blog Application

A full-stack blog application built with React.js and Node.js, featuring user roles, authentication, and content management.

## Features

- 🔐 User Authentication and Authorization
- 👥 Multiple User Roles (Admin, Author, User)
- 📝 Blog Post Creation and Management
- 🎨 Modern and Responsive UI
- 💾 MongoDB Database Integration
- 🔒 Secure API Endpoints

## Tech Stack

### Frontend
- React.js 18
- Redux Toolkit for state management
- React Router v6
- React Bootstrap
- Axios
- React Hook Form

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs for password hashing

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- Git

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd blog-main
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
DB_URL=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret
```

## Running the Application

### Development Mode

1. Start the backend server:
```bash
cd backend
npm start
```

2. In a new terminal, start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Production Mode

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the backend server:
```bash
cd ../backend
npm start
```

The application will be served from the backend at http://localhost:5000

## API Endpoints

### User Routes
- POST `/user-api/register` - Register new user
- POST `/user-api/login` - User login
- GET `/user-api/profile` - Get user profile

### Author Routes
- POST `/author-api/create` - Create new article
- GET `/author-api/articles` - Get author's articles
- PUT `/author-api/articles/:id` - Update article
- DELETE `/author-api/articles/:id` - Delete article

### Admin Routes
- GET `/admin-api/users` - Get all users
- GET `/admin-api/articles` - Get all articles
- PUT `/admin-api/approve/:id` - Approve article
- DELETE `/admin-api/users/:id` - Delete user

## Project Structure

```
blog-main/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/               # Backend Node.js application
│   ├── APIs/             # API route handlers
│   ├── Middlewares/      # Custom middleware
│   ├── server.js         # Main server file
│   └── package.json
│
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Built with modern web development best practices
