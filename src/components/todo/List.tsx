import ListItem from "./ListItem";
import type { JSX } from "react";
import type { List } from "./ToDo";

type ListProps = {
  list: List[];
  handleDelete: (id: number) => void;
};

export default function List({ list, handleDelete }: ListProps): JSX.Element {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
