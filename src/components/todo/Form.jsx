import { useState } from "react";

export default function Form({ updateList }) {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(3);

  const handleSubmit = (e) => {
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
