import PBListItem from "./PBListItem";

export default function PhoneBookList({
  phoneBook,
  handleDelete,
  handleEdit,
  handleSort,
}) {
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
