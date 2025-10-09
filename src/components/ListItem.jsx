import { useState } from "react";

export default function ListItem({ item, handleDelete }) {
  const [isComplete, setIsComplete] = useState(false);

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
