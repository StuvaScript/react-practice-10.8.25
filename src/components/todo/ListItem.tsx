import { useState } from "react";
import type { JSX } from "react";
import type { List } from "./ToDo";

type ListItemProps = {
  item: List;
  handleDelete: (id: number) => void;
};

export default function ListItem({
  item,
  handleDelete,
}: ListItemProps): JSX.Element {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const { name, id } = item;

  return (
    <div style={{ display: "flex" }}>
      <li style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {name}
      </li>
      <span onClick={() => setIsComplete((value) => !value)}>✅</span>
      <span onClick={() => handleDelete(id)}>🗑️</span>
    </div>
  );
}
