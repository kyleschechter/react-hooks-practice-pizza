import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const url = "http://localhost:3001/pizzas"
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState("")

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setPizzas(data))
  }, [])

  const selectThisPizza = (pizzaID) => {
    const thisPizza = pizzas.find(pizza => pizza.id === pizzaID)
    setSelectedPizza(thisPizza)
  }

  const pizzaEditForm = (pizzaForm) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizzaForm.topping,
        size: pizzaForm.size,
        vegetarian: pizzaForm.vegetarian
      })
    }
    fetch(`${url}/${pizzaForm.id}`, configObj)
    .then(r => r.json())
    .then(data => {
      const newPizzaList = pizzas.map(pizza => pizza.id === data.id ? data : pizza)
      setPizzas(newPizzaList)
      setSelectedPizza("")
    })
  }

  return (
    <>
      <Header />
      {selectedPizza ? <PizzaForm pizzaEditForm={pizzaEditForm} selectedPizza={selectedPizza}/> : null}
      <PizzaList selectThisPizza={selectThisPizza} pizzas={pizzas}/>
    </>
  );
}

export default App;
