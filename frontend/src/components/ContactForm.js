import { useState } from "react";
import { API } from "../api";

function ContactForm({ addToUI }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.post("/", formData);

    // ✅ Add only new contact to UI
    addToUI(res.data);

    alert("Contact added successfully");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
