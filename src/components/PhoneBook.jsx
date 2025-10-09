import { useMemo, useState } from "react";
import PhoneBookForm from "./PhoneBookForm";
import PhoneBookList from "./PhoneBookList";

export default function PhoneBook() {
  const [phoneBook, setPhoneBook] = useState([
    { name: "Zeke", phone: "1233454566", id: 1 },
    { name: "Brooke", phone: "3455789870", id: 2 },
  ]);
  const [editContact, setEditContact] = useState({});
  const [sort, setSort] = useState({ field: "name", direction: "asc" });

  const updatePhoneBook = (value) => {
    setPhoneBook([...phoneBook, value]);
  };

  const handleDelete = (id) => {
    setPhoneBook([...phoneBook.filter((entry) => entry.id !== id)]);
  };

  const handleEdit = (id) => {
    setEditContact(phoneBook.find((entry) => entry.id === id));
  };

  const editPhoneBook = (value) => {
    setPhoneBook([
      ...phoneBook.filter((entry) => entry.id !== value.id),
      value,
    ]);
    setEditContact({});
  };

  const sortMethod = (a, b) => {
    const { field, direction } = sort;

    if (field === "name" && direction === "asc")
      return a.name.localeCompare(b.name);
    if (field === "name" && direction === "desc")
      return b.name.localeCompare(a.name);

    if (field === "phone" && direction === "asc")
      return a.phone.localeCompare(b.phone);
    if (field === "phone" && direction === "desc")
      return b.phone.localeCompare(a.phone);

    return 0;
  };

  const sortedPhoneBook = useMemo(() => {
    return phoneBook.toSorted(sortMethod);
  }, [phoneBook, sort]);

  const handleSort = (value) => {
    setSort((prev) => {
      if (prev.field === value) {
        return {
          field: value,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { field: value, direction: "asc" };
    });
  };

  return (
    <>
      <PhoneBookForm
        updatePhoneBook={updatePhoneBook}
        editContact={editContact}
        editPhoneBook={editPhoneBook}
      />
      <PhoneBookList
        phoneBook={sortedPhoneBook}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSort={handleSort}
      />
    </>
  );
}
