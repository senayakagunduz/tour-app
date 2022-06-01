import React from "react";

const SinglePerson = ({ id, name, job, image, text, removePerson }) => {
  return (
    <>
      <div className="card mb-3">
        <img
          src={image}
          className="rounded-circle mx-auto border border-3"
          alt={name}
          style={{ marginTop: "2rem", height: "10rem", width: "10rem" }}
        />
        <div className="card-body mb-5">
          <h5 className="card-text text-capitalize">{name}</h5>
          <h5 className="card-title text-primary text-uppercase">{job}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary " onClick={() => removePerson(id)}>
            remove person
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
