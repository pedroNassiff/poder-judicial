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
                                <span className="nav-text">Que es el MPD</span>
                            </Link>
                        </Item>
                        <Item key="3">Que hacemos</Item>
                        <Item key="4">Donde estamos</Item>
                        <Item key="5">Organizacion</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu icon={<ArrowDownOutlined />} title="ACCIONES">
                    <ItemGroup>
                        <Item key="6">Informes</Item>
                        <Item key="7">Monitoreos</Item>
                        <Item key="8">Defensoria itinerante</Item>
                        <Item key="9">Acciones judiciales</Item>
                        <Item key="10">Convenios</Item>
                        <Item key="11">Proyecto de Ley</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu icon={<ArrowDownOutlined />} title="MIEMBROS">
                    <ItemGroup>
                        <Item key="12">Mapa</Item>
                        <Item key="13">Turnos</Item>
                        <Item key="14">Intranet</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu icon={<ArrowDownOutlined />} title="BIBLIOTECA">
                    <ItemGroup>
                        <Item key="15">Reglamentos</Item>
                        <Item key="16">Resoluciones</Item>
                        <Item key="17">Leyes</Item>
                        <Item key="18">Legislaciones</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu icon={<ArrowDownOutlined />} title="SALUD MENTAL">
                    <ItemGroup>
                        <Item key="19">ORSM</Item>
                    </ItemGroup>
                </SubMenu>

                <Item key='20'>
                    <Link to={"/contact"}>
                        <span className="nav-text">CONTACTO</span>
                    </Link>
                </Item>

                <Item key='21' icon={<LoginOutlined />} className="menuTopLeft" >
                    <Link to={"/nueva-cuenta"}>
                        <span className="nav-text">Registrar</span>
                    </Link>
                </Item>
                <Item key='22' icon={<LoginOutlined />} className="menuTopLeft">
                    <Link to={"/login"}>
                        <span className="nav-text">Login</span>
                    </Link>
                </Item>
            </Menu>
        </div>
    )
}