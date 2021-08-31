import React, { useState } from "react";
import { Input } from "antd";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };
  return (
    <Input
      size="large"
      placeholder="Find a character"
      autoFocus
      onChange={(e) => onSearch(e.target.value)}
      value={text}
    />
  );
};

export default Search;
