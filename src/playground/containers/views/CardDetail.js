import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startGetCharactere } from "../../redux/actions/charactersActions";
import { setProducts } from "../../redux/actions/productsActions";
import { useDispatch } from "react-redux";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Card, message } from "antd";

const { Meta } = Card;

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  const [edit, setEdit] = useState(false);

  const success = (character) => {
    dispatch(setProducts(character));
    message.success("This character has been added to your collection.");
  };
  useEffect(() => {
    if (props.match.path == "/carddetail/:id") {
      dispatch(startGetCharactere(props.match.params.id));
    } else {
      setEdit(true);
    }
  }, []);

  return (
    <div className="logo">
      {character.thumbnail ? (
        <Card
          style={{ width: 400 }}
          cover={
            <img
              alt="example"
              src={character.thumbnail.path + "/portrait_xlarge.jpg"}
            />
          }
          actions={[
            !edit ? (
              <PlusOutlined key="plus" onClick={() => success(character)} />
            ) : (
              <EditOutlined key="edit" />
            ),
          ]}
        >
          <Meta
            title={character.name}
            description={character.description || "No description"}
          />
        </Card>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default CardDetail;
