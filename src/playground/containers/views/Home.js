import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { startGetAllCharacteres } from "../../redux/actions/charactersActions";
import Search from "../components/Search";
import logo from "../../assets/marvel-logo.png";

const Home = () => {
  const characters = useSelector((state) => state.allcharacters.characters);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (query === "") {
      console.log("rodou primeira");
      dispatch(startGetAllCharacteres());
    } else {
      dispatch(startGetAllCharacteres(query));
    }
  }, [query]);

  return (
    <div>
      <div className="logo ">
        <img src={logo} height={128} />
      </div>
      <div className="content-container">
        <Search search={(q) => setQuery(q)}></Search>
      </div>

      <div className="content-container">
        <Cards characters={characters} />
      </div>
    </div>
  );
};

export default Home;
