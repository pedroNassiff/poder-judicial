import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { ArrowDownOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';
import Header from "componentes/header"

import './MenuTop.scss'
const { SubMenu, Item, ItemGroup } = Menu;

export default function MenuTop() {
    const [current, serCurrent] = useState('1')

    const handleClick = e => {
        serCurrent(e.key)
    }

    function checkAvailability(arr) {
        console.log(arr.some(arrVal => current === arrVal));
        return arr.some(arrVal => current === arrVal);
    }
    return (
        <div className="menuTopContainer">
            <Header />
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme={"dark"}>
                <Item key='1' >
                    <Link to={"/"}>
                        <span className="nav-text">INICIO</span>
                    </Link>
                </Item>
                <SubMenu className={checkAvailability(["2", "3", "4", "5"]) ? "adtiveColor" : ""} title="INSTITUCIONAL">
                    <Item key='2'>
                        <Link to={"/contact"}>
                            <span className="nav-text">Que es el MPD</span>
                        </Link>
                    </Item>
                    <Item key="3">Que hacemos</Item>
                    <Item key="4">Donde estamos</Item>
                    <Item key="5">Organizacion</Item>
                </SubMenu>
                <SubMenu className={checkAvailability(["6", "7", "8", "9", "10", "11"]) ? "adtiveColor" : ""} title="ACCIONES">
                    <Item key="6">Informes</Item>
                    <Item key="7">Monitoreos</Item>
                    <Item key="8">Defensoria itinerante</Item>
                    <Item key="9">Acciones judiciales</Item>
                    <Item key="10">Convenios</Item>
                    <Item key="11">Proyecto de Ley</Item>
                </SubMenu>
                <SubMenu className={checkAvailability(["12", "13", "14"]) ? "adtiveColor" : ""} title="MIEMBROS">
                    <Item key="12">Mapa</Item>
                    <Item key="13">Turnos</Item>
                    <Item key="14">Intranet</Item>
                </SubMenu>
                <SubMenu className={checkAvailability(["15", "16", "17", "18"]) ? "adtiveColor" : ""} title="BIBLIOTECA">
                    <Item key="15">Reglamentos</Item>
                    <Item key="16">Resoluciones</Item>
                    <Item key="17">Leyes</Item>
                    <Item key="18">Legislaciones</Item>
                </SubMenu>
                <SubMenu className={checkAvailability(["19"]) ? "adtiveColor" : ""} title="SALUD MENTAL">
                    <Item key="19">ORSM</Item>
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