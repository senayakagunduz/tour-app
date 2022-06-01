import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function Main() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div>
        <h4>no tours left</h4>
        <button type="button" className="btn btn-primary" onClick={fetchTours}>
          refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default Main;
