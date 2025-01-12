# Client-Side To-Do List Application

This is the client-side of the MERN stack To-Do List application. It is built using React and Vite for a fast development experience.

## Project Structure

- **public/**: Contains static assets such as images and icons.
- **src/**: Contains the main source code for the application.
  - **components/**: Reusable React components.
  - **pages/**: Contains the main pages of the application:
    - **Landing.jsx**: Landing page component.
    - **Login.jsx**: Login page component.
    - **Signup.jsx**: Signup page component.
    - **Home.jsx**: Main to-do list interface component.
    - **Profile.jsx**: User profile component.
    - **Error.jsx**: Error handling component.
  - **App.jsx**: Main application component that sets up routing.
  - **main.jsx**: Entry point for the React application.
  - **styles/**: CSS or styled components for styling the application.
- **index.html**: Main HTML file serving the React application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **vite.config.js**: Configuration for Vite development server.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd mern-todolist-app/client
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Features

- User authentication with login and signup functionality.
- A main interface for managing to-do items.
- User profile management.
- Error handling for better user experience.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.