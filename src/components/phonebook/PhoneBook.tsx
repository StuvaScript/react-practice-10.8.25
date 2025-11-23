import { useMemo, useState } from "react";
import PhoneBookForm from "./PhoneBookForm";
import PhoneBookList from "./PhoneBookList";
import type { JSX } from "react";

type PhoneBook = {
  name: string;
  phone: string;
  id: number;
};

type Sort = {
  field: "name";
  direction: "asc" | "desc";
};

export default function PhoneBook(): JSX.Element {
  const [phoneBook, setPhoneBook] = useState<PhoneBook[]>([
    { name: "Zeke", phone: "1233454566", id: 1 },
    { name: "Brooke", phone: "3455789870", id: 2 },
  ]);
  const [editContact, setEditContact] = useState<{} | PhoneBook>({});
  const [sort, setSort] = useState<Sort>({ field: "name", direction: "asc" });

  const updatePhoneBook = (value: PhoneBook): void => {
    setPhoneBook([...phoneBook, value]);
  };

  const handleDelete = (id: number): void => {
    setPhoneBook([...phoneBook.filter((entry) => entry.id !== id)]);
  };

  const handleEdit = (id: number): void => {
    const editableContact: PhoneBook | undefined = phoneBook.find(
      (entry) => entry.id === id
    );
    if (!editableContact)
      throw new Error(`No contact exists with the ID of ${id}`);

    setEditContact(editableContact);
  };

  const editPhoneBook = (value: PhoneBook): void => {
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
