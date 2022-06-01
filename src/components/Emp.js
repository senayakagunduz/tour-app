import React, { useState } from "react";
import dataEmp from "./dataEmp";
import EmpList from "./EmpList";

const Emp = () => {
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  const [people, setPeople] = useState(dataEmp);
  return (
    <>
      <div
        className="container mt-3 "
        style={{ background: "#D1E7DD", width: "40rem" }}
      >
        <h3 className="text-center text-secondry"> Review Candidates</h3>
        <EmpList people={people} removePerson={removePerson} />
      </div>
    </>
  );
};

export default Emp;
