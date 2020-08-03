import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import MenuTop from 'componentes/menuTop'

import './LayoutBasic.scss'

export default function LayoutBasic(props) {
    const { routes } = props
    const { Content, Footer } = Layout

    return (
        <Layout>
            <MenuTop />
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Frist</Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}