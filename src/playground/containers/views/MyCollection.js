import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { startGetAllCharacteres } from "../../redux/actions/charactersActions";
import logo from "../../assets/marvel-logo.png";

const MyCollection = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(startGetAllCharacteres());
  }, []);

  return (
    <div>
      <div className="logo ">
        <img src={logo} height={128} />
      </div>
      <div className="content-container">
        <Cards characters={characters} edit={true} />
      </div>
    </div>
  );
};

export default MyCollection;
