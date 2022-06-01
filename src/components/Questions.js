import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import qdata from "./qdata";

const Questions = () => {
  const [questions, setQuestions] = useState(qdata);
  return (
    <main className="mainn">
      <div className="containerr">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Questions;
