import React from "react";
import { Layout } from "antd";
import LoadRoutes from "config/LoadRoutes";
import MenuTop from "componentes/menuTop";

import "./LayoutMain.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <MenuTop />
      <Content>
        <LoadRoutes routes={routes} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Somos 404</Footer>
    </Layout>
  );
}
