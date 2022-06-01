import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4 className="title">{title}</h4>
        <button className="btn-info" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
