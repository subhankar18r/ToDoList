import React, { useState } from "react";
import Button from "../components/Button";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("User signed up:", formData);
  };

  return (
    <main className="flex h-content flex-col items-center justify-center p-4">
      <div className="rounded-lg p-4 text-center shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="input-text"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            className="input-text"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="input-text"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button">
            Sign up
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
