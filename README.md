# MERN To-Do List App

This is a MERN stack To-Do List application that allows users to manage their tasks efficiently. The application consists of a client-side built with React and a server-side built with Node.js and Express, utilizing MongoDB for data storage.

## Project Structure

```
mern-todolist-app
├── client                # Client-side application
│   ├── public            # Static assets (images, icons)
│   ├── src               # Source code for the React application
│   │   ├── components     # Reusable React components
│   │   ├── pages          # Page components
│   │   │   ├── Landing.jsx # Landing page component
│   │   │   ├── Login.jsx   # Login page component
│   │   │   ├── Signup.jsx  # Signup page component
│   │   │   ├── Home.jsx    # Home page component
│   │   │   ├── Profile.jsx  # Profile page component
│   │   │   └── Error.jsx    # Error page component
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Entry point for the React application
│   │   └── styles         # CSS or styled components
│   ├── index.html        # Main HTML file
│   ├── package.json       # Client-side npm configuration
│   ├── vite.config.js     # Vite configuration
│   └── README.md          # Client-side documentation
├── server                # Server-side application
│   ├── controllers        # Controller files for routes
│   ├── models             # Mongoose models
│   ├── routes             # API route definitions
│   ├── index.js           # Entry point for the server application
│   ├── package.json       # Server-side npm configuration
│   └── README.md          # Server-side documentation
├── .gitignore            # Git ignore file
└── README.md             # Overall project documentation
```

## Features

- User authentication (login and signup)
- To-do list management (add, edit, delete tasks)
- User profile management
- Responsive design

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:

   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:

   ```
   cd server
   node index.js
   ```

2. Start the client:
   ```
   cd ../client
   npm run dev
   ```

Visit `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.
