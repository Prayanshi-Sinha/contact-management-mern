function ContactList({ contacts, removeFromUI }) {
  return (
    <ul>
      {contacts.map((c) => (
        <li key={c._id}>
          <b>{c.name}</b> | {c.email} | {c.phone}
          <button
            onClick={() => removeFromUI(c._id)}
            style={{ marginLeft: "10px" }}
          >
            ❌ Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
