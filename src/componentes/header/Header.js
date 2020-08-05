import React from "react";
<<<<<<< HEAD

const Header = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
=======
import { PageHeader, Avatar } from "antd";
import Logo from "assets/img/logo4.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import "./Header.scss";

const Header = () => {
  return (
    <PageHeader className="site-page-header">
      <div className="pageContainer">
        <div className="HeaderContainer">
          <img src={`${Logo}`} alt="content" width="200px" height="auto" />
        </div>
        <div className="socialRedContainer">
          <div>
            <Avatar shape="square" className="socialRed" size={45} icon={<FacebookOutlined />} />
            <Avatar shape="square" className="socialRed" size={45} icon={<InstagramOutlined />} />
            <Avatar shape="square" className="socialRed" size={45} icon={<TwitterOutlined />} />
          </div>
          <div className="numeroTel">
            <span> +54 0000-0000</span>
          </div>
        </div>
      </div>
    </PageHeader>
>>>>>>> 17b502a87a7035109360a901742d4fc02685fc76
  );
};

export default Header;
