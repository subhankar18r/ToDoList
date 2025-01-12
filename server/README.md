# mern-todolist-app Server Documentation

This directory contains the server-side code for the MERN stack To-Do List application.

## Overview

The server is built using Node.js and Express, and it connects to a MongoDB database using Mongoose. It provides RESTful API endpoints for the client-side application to interact with.

## Directory Structure

- **controllers/**: Contains the logic for handling requests and responses for different routes.
- **models/**: Contains Mongoose models that define the structure of the data in the MongoDB database.
- **routes/**: Contains route definitions for the API endpoints.
- **index.js**: The entry point for the server application. Sets up the Express server and connects to the database.
- **package.json**: Lists the dependencies and scripts for the server-side application.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   ```
   cd mern-todolist-app/server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- **GET /api/todos**: Retrieve all to-do items.
- **POST /api/todos**: Create a new to-do item.
- **PUT /api/todos/:id**: Update a to-do item by ID.
- **DELETE /api/todos/:id**: Delete a to-do item by ID.

## License

This project is licensed under the MIT License. See the LICENSE file for details.