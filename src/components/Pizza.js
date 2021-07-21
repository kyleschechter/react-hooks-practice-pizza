import React from "react";

function Pizza({ handlePizzaEdit, topping, size, veg }) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veg ? "Yes" : "No"}</td>
      <td>
        <button onClick={handlePizzaEdit} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
