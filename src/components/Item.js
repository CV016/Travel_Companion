export function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.select}
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
