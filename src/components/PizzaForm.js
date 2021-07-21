import React, { useState } from "react";

function PizzaForm({ pizzaEditForm, selectedPizza }) {
  const [formData, setFormData] = useState({
    id: selectedPizza.id,
    topping: selectedPizza.topping,
    size: selectedPizza.size,
    vegetarian: selectedPizza.vegetarian
  })

  const handleChange = (e) => {
    if (e.target.name === "vegetarian") {
      setFormData({
        ...formData,
        vegetarian: true
      })
    } else if (e.target.name === "not vegetarian") {
      setFormData({
        ...formData,
        vegetarian: false
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.topping.toLowerCase().includes("pineapple")) {
      alert("Pineapple does NOT belong on Pizza, try again!")
    } else {
      pizzaEditForm(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={true}
              onClick={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="not vegetarian"
              value={false}
              onClick={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
