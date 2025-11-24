import PBListItem from "./PBListItem";
import type { PhoneBook, Sort } from "./PhoneBook";
import type { JSX } from "react";

type PhoneBookListProps = {
  phoneBook: PhoneBook[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleSort: (value: Sort["field"]) => void;
};

export default function PhoneBookList({
  phoneBook,
  handleDelete,
  handleEdit,
  handleSort,
}: PhoneBookListProps): JSX.Element {
  return (
    <div className="container" style={{ width: "30vw" }}>
      <div
        className="headers"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="name"
          style={{ width: "100%" }}
          onClick={() => handleSort("name")}
        >
          Name
        </div>

        <div
          className="phone"
          style={{ width: "100%" }}
          onClick={() => handleSort("phone")}
        >
          Phone
        </div>

        <div className="phone" style={{ width: "100%" }}>
          Buttons
        </div>
      </div>
      <ul
        style={{
          listStyleType: "none",
          margin: "0",
          padding: "0",
        }}
      >
        {phoneBook.map((person) => (
          <PBListItem
            key={person.id}
            person={person}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}
