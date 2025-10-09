import { useState } from "react";

export default function PhoneBookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);

  return (
    <form>
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
        <button type="submit">Add person</button>
      </div>
    </form>
  );
}
