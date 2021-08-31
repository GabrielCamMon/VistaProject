import React from "react";
import { BoxSpaceHeader } from "../Styles/box";

import {
    Table,
    Divider,
    Button,
    Popconfirm,
    Row,
    Col
  } from "antd";

  import { DeleteOutlined ,EditOutlined} from "@ant-design/icons";
const User = () => {

    const columns = [
        {
          title: "Nome",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "CPF",
          dataIndex: "cpf",
          key: "cpf"
        },
        {
          title: "CNPJ",
          dataIndex: "cnpj",
          key: "cnpj"
        },
        {
          title: "Saldo",
          dataIndex: "balances",
          key: "balances"
        },
        {
          title: "Contas",
          dataIndex: "accounts",
          key: "accounts"
        },
        {
          title: "Ação",
          key: "action",
          render: (text, record) => (
            <span>
              <EditOutlined />
  
              <Divider type="vertical" />
              <Popconfirm
                title="Você realmente deseja deletar esse usuário?"
                onConfirm={e => this.confirm(record.key, e)}
                okText="Sim"
                cancelText="Não"
              >
               <DeleteOutlined />
              </Popconfirm>
            </span>
          )
        }
      ];
  
      const data = [
        {
          id: "1",
          name: "Gabriel",
          cpf: "854738975345",
          cnpj: "3523300012",
          balances: 300000,
          accounts: ""
        }
      ];
       
  return (
     <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <BoxSpaceHeader value={100}>
          <Row gutter={168}>
            <Col className="gutter-row" span={2}>
              <Button
                className="gutter-box"
                type="primary"
               
              >
                Cadastrar Usuário
              </Button>
            </Col>
          </Row>
        </BoxSpaceHeader>
        <Table bordered={true} columns={columns} dataSource={data} />
        </div>
  );
};

export default User;



  