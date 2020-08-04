import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { SettingOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';

import './MenuTop.scss'
const { SubMenu } = Menu;

export default function MenuTop(props) {
    const [current, serCurrent] = useState("Home")

    const handleClick = e => {
        console.log('click ', e)
        serCurrent({ current: e.key })
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key='1' icon={<HomeOutlined />}  >
                <Link to={"/"}>
                    <span className="nav-text">INICIO</span>
                </Link>
            </Menu.Item>
            <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key='2'>
                        <Link to={"/contact"}>
                            <span className="nav-text">Contact</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key='2' icon={<LoginOutlined />} >
                <Link to={"/login"}>
                    <span className="nav-text">Login</span>
                </Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<LoginOutlined />} >
                <Link to={"/nueva-cuenta"}>
                    <span className="nav-text">Nueva Cuenta</span>
                </Link>
            </Menu.Item>
        </Menu>
    )
}