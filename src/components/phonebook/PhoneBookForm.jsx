import { useEffect, useState } from "react";

export default function PhoneBookForm({
  updatePhoneBook,
  editContact,
  editPhoneBook,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (editContact?.id) {
      setName(editContact.name);
      setPhone(editContact.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editContact?.id) {
      editPhoneBook({ name, phone, id: editContact.id });
    } else {
      updatePhoneBook({ name, phone, id: counter });
      setCounter((count) => count + 1);
    }
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">
          {editContact?.id ? "Edit person" : "Add person"}
        </button>
      </div>
    </form>
  );
}
