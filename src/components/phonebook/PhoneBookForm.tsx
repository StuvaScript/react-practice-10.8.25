import React, { useEffect, useState } from "react";
import type { JSX } from "react";
import type { PhoneBook } from "./PhoneBook";

type PhoneBookFormProps = {
  updatePhoneBook: (value: PhoneBook) => void;
  editContact: null | PhoneBook;
  editPhoneBook: (value: PhoneBook) => void;
};

export default function PhoneBookForm({
  updatePhoneBook,
  editContact,
  editPhoneBook,
}: PhoneBookFormProps): JSX.Element {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [counter, setCounter] = useState<number>(3);

  useEffect((): void => {
    if (editContact) {
      setName(editContact.name);
      setPhone(editContact.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editContact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (editContact) {
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
          {editContact ? "Edit person" : "Add person"}
        </button>
      </div>
    </form>
  );
}
