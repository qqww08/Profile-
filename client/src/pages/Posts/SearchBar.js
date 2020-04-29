import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar() {
  const [Searchv, setSearchv] = useState("");
  const searchHandler = (event) => {
    setSearchv(event.currentTarget.value);
  };
  return (
    <Search
      placeholder="Search"
      value={Searchv}
      onChange={searchHandler}
      style={{ width: 200 }}
    />
  );
}

export default SearchBar;
