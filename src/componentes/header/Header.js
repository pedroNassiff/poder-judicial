import React from "react";
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
  );
};

export default Header;
