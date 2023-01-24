import React from "react";
import GroceryList from "../components/GroceryList";

const GroceryMain = () => {
  return (
    <section className="section-center">
      <form className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery-input"
            type="text"
            placeholder="enter your activity"
          />
        </div>

        <button className="grocery-btn" type="submit">
          Submit
        </button>

        <div className="grocery-container">
          <button className="clear-btn">Clear</button>
        </div>
      </form>
      <div className=""></div>
    </section>
  );
};

export default GroceryMain;
