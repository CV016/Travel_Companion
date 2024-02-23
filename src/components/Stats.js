export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Let's Start Packing for the Trip!</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Packed up Everthing! Ready to go 💯"
          : ` You have ${numItems} items in your List and you have packed ${packedItems}
        of them (${packedPercentage}%) 📦`}
      </em>
    </footer>
  );
}
