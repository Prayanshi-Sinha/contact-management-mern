import { useEffect, useState } from "react";
import { API } from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";


function App() {
  const [contacts, setContacts] = useState([]);
  const removeFromUI = (id) => {
  setContacts(contacts.filter((c) => c._id !== id));
};
  const loadContacts = async () => {
    const res = await API.get("/");
    setContacts(res.data);
  };
  


  useEffect(() => { loadContacts(); }, []);

  return (
    <div className="container">
      <h2>Contact Management App</h2>
      <ContactForm addToUI={(contact) => setContacts([contact, ...contacts])} />
      <ContactList contacts={contacts} removeFromUI={removeFromUI} />

    </div>
  );
}

export default App;
