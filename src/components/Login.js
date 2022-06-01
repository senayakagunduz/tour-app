import React, { useState } from "react";

function Login() {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   console.log(firstName, " ", email);
  //   e.preventDefault();
  //   console.log(firstName, email);
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     console.log(person);
  //     setFirstName("");
  //     setEmail("");
  //   } else {
  //     console.log("empty arrays");
  //   }
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <form
        className="mx-auto my-3 border border-3"
        style={{
          width: "400px",
          border: "1px solid",
        }}
      >
        <div className="form-group row">
          <label for="inputName3" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder={person.email}
              value={person.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="text" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mx-auto" style={{ width: "200px" }}>
          <button
            className=" btn btn-primary my-1"
            type="submit"
            onClick={handleSubmit}
          >
            add person
          </button>
        </div>
      </form>

      {people.map((person, index) => {
        const { id, firstName, email, age } = person;
        return (
          <div className="row" key={id}>
            <div className="col text-center">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Login;
