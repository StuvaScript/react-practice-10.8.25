import type { JSX } from "react";
import type { PhoneBook } from "./PhoneBook";

type PBListItemProps = {
  person: PhoneBook;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};

export default function PBListItem({
  person,
  handleDelete,
  handleEdit,
}: PBListItemProps): JSX.Element {
  const { name, phone, id }: PhoneBook = person;

  return (
    <>
      <li
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "100%" }}>{name}</div>
        <div style={{ width: "100%" }}>{phone}</div>
        <div style={{ width: "100%" }}>
          <span onClick={() => handleEdit(id)}>🖊️</span>
          <span onClick={() => handleDelete(id)}>🗑️</span>
        </div>
      </li>
    </>
  );
}
