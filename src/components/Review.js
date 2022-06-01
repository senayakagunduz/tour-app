import React, { useState } from "react";
import people from "./dataEmp";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  //   const [people, setPeople] = useState(dataEmp);
  const { name, job, text, image } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <div>
        <div
          className="container mb-3 border border-5"
          style={{
            height: "30rem",
            width: "40rem",
            marginTop: "40px",
          }}
        >
          <img
            src={image}
            className="rounded-circle mx-auto border border-3"
            alt={name}
            style={{
              marginTop: "2rem",
              height: "10rem",
              width: "10rem",
            }}
          />
          {/* <span className="quote-icon">
            <FaQuoteRight />
          </span> */}
          <div className="font">
            <h3>{name}</h3>
            <h4 className="jobSpan">
              <span>{job}</span>
            </h4>
            <p>{text}</p>
          </div>

          <div className="btn-container">
            <button className="prev-btn " onClick={nextPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={prevPerson}>
              <FaChevronRight />
            </button>
          </div>
          <div>
            <button className="random-btn btn btn-info" onClick={randomPerson}>
              surprise me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
