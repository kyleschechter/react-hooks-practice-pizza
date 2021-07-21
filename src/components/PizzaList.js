import React from "react";
import Pizza from "./Pizza";

function PizzaList({ selectThisPizza, pizzas }) {

  const listOfPizza = pizzas.map(pizza => {

    const handlePizzaEdit = () => {
      selectThisPizza(pizza.id)
    }
    return (
      <Pizza 
      key={pizza.id}
      topping={pizza.topping}
      size={pizza.size}
      veg={pizza.vegetarian}
      handlePizzaEdit={handlePizzaEdit}
      />
    )
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {listOfPizza}
      </tbody>
    </table>
  );
}

export default PizzaList;
