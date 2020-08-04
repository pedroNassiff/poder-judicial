import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { ArrowDownOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';
import Header from "componentes/header"

import './MenuTop.scss'
const { SubMenu, Item, ItemGroup } = Menu;

export default function MenuTop(props) {
    const [current, serCurrent] = useState('1')

    const handleClick = e => {
        serCurrent(e.key)
    }

    return (
        <div style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Header />
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Item key='1' icon={<HomeOutlined />}  >
                    <Link to={"/"}>
                        <span className="nav-text">INICIO</span>
                    </Link>
                </Item>
                <SubMenu icon={<ArrowDownOutlined />} title="INSTITUCIONAL">
                    <ItemGroup>
                        <Item key='2'>
                            <Link to={"/contact"}>
                                <span className="nav-text">Contact</span>
                            </Link>
                        </Item>
                        <Item key="setting:2">Option 2</Item>
                        <Item key="setting:3">Option 3</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu icon={<ArrowDownOutlined />} title="ACCIONES">
                    <ItemGroup>
                        <Item key="setting:1">Option 1</Item>
                        <Item key="setting:2">Option 2</Item>
                        <Item key="setting:3">Option 3</Item>
                    </ItemGroup>
                </SubMenu>

                <Item  >
                </Item>

                <Item key='4' icon={<LoginOutlined />} className="menuTopLeft" >
                    <Link to={"/nueva-cuenta"}>
                        <span className="nav-text">Registrar</span>
                    </Link>
                </Item>
                <Item key='3' icon={<LoginOutlined />} className="menuTopLeft">
                    <Link to={"/login"}>
                        <span className="nav-text">Login</span>
                    </Link>
                </Item>
            </Menu>
        </div>
    )
}