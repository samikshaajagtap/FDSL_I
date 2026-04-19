import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.phone) err.phone = "Phone is required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <span className="error">{errors.phone}</span>

        <button type="submit">Submit</button>
      </form>

      <h3 className="success">{success}</h3>
    </div>
  );
}

export default App;