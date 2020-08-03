import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from "antd"

import './MenuTop.scss'

export default function MenuTop(props) {
    const { Sider } = Layout
    return (
        <Sider className="basic-sider" >
            <Menu theme="dark" mode="inline">
                <Menu.Item key='1'>
                    <Link to={"/"}>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to={"/contact"}>
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to={"/login"}>
                        <span className="nav-text">Login</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}