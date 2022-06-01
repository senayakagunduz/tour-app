import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div>
        <h2 className="text-center">Our tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
}
