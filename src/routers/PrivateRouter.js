import React, {useState} from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import {

  PieChartOutlined,
 
  WalletOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  keyNum,
  title,
  ...rest
}) =>{ 
  const [collapsed, setCollapsed] = useState(true);
  return (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (

        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={ collapsed } onCollapse={()=>setCollapsed(collapsed => setCollapsed(!collapsed))}>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={[`${keyNum}`]} mode="inline">
          <Menu.Item key="1">
                 <PieChartOutlined />
                  <span>Dashboard</span>
                  <NavLink to="/dashboard" />
                </Menu.Item>

                <Menu.Item key="2">
                <UserOutlined/>
                  <span>Usuário</span>
                  <NavLink to="/user" />
                </Menu.Item>

                <SubMenu
                  key="3"
                  title={
                    <span>
                     <WalletOutlined />
                      <span>Contas</span>
                    </span>
                  }
                >
                  <Menu.Item key="32">
                    <span>Carteira</span>
                    <NavLink to="/accountsWallet" />
                  </Menu.Item>
                  <Menu.Item key="31">
                    <span>Conta Banco</span>
                    <NavLink to="/accountsBank" />
                  </Menu.Item>
                </SubMenu>
{/* 
                <Menu.Item key="4">
                  <Icon
                    type="medium"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Moeda</span>
                  <NavLink to="/currency" />
                </Menu.Item>

                <Menu.Item key="5">
                  <Icon
                    type="shop"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Ordem</span>
                  <NavLink to="/order" />
                </Menu.Item>

                <Menu.Item key="6">

                  <Icon
                    type="dollar"
                    style={{ fontSize: "20px", color: "#FFF" }}
                  />
                  <span>Pagamentos</span>
                  <NavLink to="/payment" />
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon
                    type="swap"
                    style={{ fontSize: "20px", color: "#FFF" }}
                  />
                  <span>Transaction</span>
                  <NavLink to="/transaction" />
                </Menu.Item>
         */}
        
          </Menu>
        </Sider>
        <Layout className="site-layout">
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
     
    </Header> */}
          <Header  style={{ padding: 0 ,position: 'fixed', zIndex: 1, width: '100%' }} />
          <Content style={{ margin: '80px 16px' }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>{title}</Breadcrumb.Item>
                </Breadcrumb>         
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Component {...props} />
                </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
       
      ) : (
        <Redirect to="/" />
      )
    }
  />
)};

const mapStateToProps = () => ({
  isAuthenticated: true,
});
export default connect(mapStateToProps)(PrivateRoute);
