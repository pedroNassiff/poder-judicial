import React from "react";
import { Layout } from "antd";
import LoadRoutes from "config/LoadRoutes";
import MenuTop from "componentes/menuTop";
import { useLocation } from 'react-router-dom'

import "./LayoutMain.scss";

export default function LayoutBasic(props) {
  let location = useLocation();
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      {location.pathname !== '/login' && <MenuTop />}
      <Content>
        <LoadRoutes routes={routes} />
      </Content>
      <Footer>Somos 404</Footer>
    </Layout>
  );
}
