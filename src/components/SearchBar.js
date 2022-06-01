import React, { useState } from "react";
import { Users } from "./users";
import Table from "./Table";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];
  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))

      //bu satırların yerine some metododuna keys i kullanarak daha pratik şeklide filter yazcaz.
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <div className="search">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              onChange={(e) => setQuery(e.target.value)}
            />
            <label className="form-label" htmlFor="form1">
              Search...
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <Table data={search(Users)} />
      {/* <ul className="list"> search fonk. yazınca bu satırlara gerek kalmadı
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </>
  );
}
