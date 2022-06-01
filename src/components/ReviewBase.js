import React from "react";
import Review from "./Review";

const ReviewBase = () => {
  return (
    <main>
      <div className="container">
        <div className="title ">
          <h2 className="text-primary">Our Reviews</h2>
        </div>
        <Review />
      </div>
    </main>
  );
};

export default ReviewBase;
