import ListItem from "./ListItem";

export default function List({ list, handleDelete }) {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
