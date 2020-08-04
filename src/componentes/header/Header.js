import React from "react";
import { PageHeader, Button } from 'antd';
import Logo from 'assets/img/logo4.png'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

import './Header.scss'

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
    >
      <div className="pageHeaderContainer">
        <div>
          <img
            src={`${Logo}`}
            alt="content"
            width="200px"
            height="auto"
          />
        </div>
        <div className="socialRedContainer">
          <div>
          <FacebookOutlined className="socialRed"/>
          <InstagramOutlined className="socialRed"/>
          <TwitterOutlined className="socialRed"/>
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
