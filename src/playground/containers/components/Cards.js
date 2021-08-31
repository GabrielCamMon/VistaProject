import React from "react";

import { Link } from "react-router-dom";
import { Space, Card, Col, Row } from "antd";
const { Meta } = Card;

const Cards = (props) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {props.characters.length === 0 ? (
          <div>
            <span>No characters</span>
          </div>
        ) : (
          props.characters.map((e) => {
            return (
              <Space key={e.id} size={16} direction="vertical">
                <Col>
                  <Link
                    to={
                      !props.edit
                        ? `/carddetail/${e.id}`
                        : `/cardeditdetail/${e.id}`
                    }
                  >
                    <Card
                      hoverable
                      style={{ width: 256 }}
                      cover={
                        <img
                          alt="example"
                          src={e.thumbnail.path + "/portrait_xlarge.jpg"}
                        />
                      }
                    >
                      <Meta title={e.name} description="" />
                    </Card>
                  </Link>
                </Col>
              </Space>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default Cards;
