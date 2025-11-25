import { useState } from "react";
import type { JSX, FormEvent } from "react";
import type { List } from "./ToDo";

type FormProps = {
  updateList: (input: List) => void;
};

export default function Form({ updateList }: FormProps): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [counter, setCounter] = useState<number>(3);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateList({ name: input, id: counter });
    setCounter((count) => count + 1);
    setInput("");
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guitars">Guitars: </label>
        <input
          id="guitars"
          name="guitars"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <button type="submit">Add guitar</button>
        </div>
      </form>
    </>
  );
}
