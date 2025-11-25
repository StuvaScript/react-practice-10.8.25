import { useState } from "react";
import Form from "./Form";
import List from "./List";
import type { JSX } from "react";

type List = {
  name: string;
  id: number;
};

export default function ToDo(): JSX.Element {
  const [list, setList] = useState<List[]>([
    { name: "Gibson", id: 1 },
    { name: "Ibanez", id: 2 },
  ]);

  const updateList = (input: List): void => setList([...list, input]);

  const handleDelete = (id: number): void =>
    setList([...list.filter((item) => item.id !== id)]);

  return (
    <>
      <Form updateList={updateList} />
      <List list={list} handleDelete={handleDelete} />
    </>
  );
}
