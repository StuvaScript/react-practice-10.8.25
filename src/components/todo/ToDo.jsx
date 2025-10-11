import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function ToDo() {
  const [list, setList] = useState([
    { name: "Gibson", id: 1 },
    { name: "Ibanez", id: 2 },
  ]);

  const updateList = (input) => {
    setList([...list, input]);
  };

  const handleDelete = (id) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <Form updateList={updateList} />
      <List list={list} handleDelete={handleDelete} />
    </>
  );
}
