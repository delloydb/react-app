import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["newyork", "london", "paris", "tokyo"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <div>
      <h1>lists</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
