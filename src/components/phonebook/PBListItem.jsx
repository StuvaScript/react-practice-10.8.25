export default function PBListItem({ person, handleDelete, handleEdit }) {
  const { name, phone, id } = person;

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
