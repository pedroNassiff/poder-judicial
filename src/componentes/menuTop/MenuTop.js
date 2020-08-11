import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import Header from "componentes/header"
import Api from 'services/AuthService'
import './MenuTop.scss'
const { SubMenu, Item, ItemGroup } = Menu;

const user = JSON.parse(localStorage.getItem("user"));

export default function MenuTop() {

    const [current, serCurrent] = useState('1')

    const handleClick = e => {
        serCurrent(e.key)
    }

    function checkAvailability(arr) {
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
                    <ItemGroup >
                        <Item key='2'>Que es el MPD
                        <Link to={"/institucional/mpd"} />
                        </Item>
                        <Item key="3">Que hacemos
                        <Link to={"/institucional/queHacemos"} />
                        </Item>
                        <Item key="4">Donde estamos
                        <Link to={"/institucional/dondeEstamos"} />
                        </Item>
                        <Item key="5">Organizacion
                        <Link to={"/institucional/organizacion"} />
                        </Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu className={checkAvailability(["6", "7", "8", "9", "10", "11"]) ? "adtiveColor" : ""} title="ACCIONES">
                    <ItemGroup >
                        <Item key="6">Informes
                        <Link to={"/acciones/informes"} />
                        </Item>
                        <Item key="7">Monitoreos
                        <Link to={"/acciones/monitoreos"} />
                        </Item>
                        <Item key="8">Defensoria itinerante
                        <Link to={"/acciones/defensoriaItinerante"} />
                        </Item>
                        <Item key="9">Acciones judiciales
                        <Link to={"/acciones/accionesJudiciales"} />
                        </Item>
                        <Item key="10">Convenios
                        <Link to={"/acciones/convenios"} />
                        </Item>
                        <Item key="11">Proyecto de Ley
                        <Link to={"/acciones/proyectoDeLey"} />
                        </Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu className={checkAvailability(["12", "13", "14"]) ? "adtiveColor" : ""} title="MIEMBROS">
                    <ItemGroup >
                        <Item key="12">Mapa
                        <Link to={"/miembros/mapa"} />
                        </Item>
                        <Item key="13">Turnos
                        <Link to={"/miembros/turnos"} />
                        </Item>
                        <Item key="14">Intranet
                        <Link to={"/miembros/intranet"} />
                        </Item>
                    </ItemGroup>
                </SubMenu>
                <Item key='15'>
                    <Link to={"/biblioteca"}>
                        <span className="nav-text">BIBLIOTECA</span>
                    </Link>
                </Item>
                <SubMenu className={checkAvailability(["19"]) ? "adtiveColor" : ""} title="SALUD MENTAL">
                    <ItemGroup >
                        <Item key="19">ORSM
                        <Link to={"/saludMental/orsm"} />
                        </Item>
                    </ItemGroup>
                </SubMenu>

                <Item key='20'>
                    <Link to={"/contact"}>
                        <span className="nav-text">CONTACTO</span>
                    </Link>
                </Item>
                {
                    user && user.roles.some(
                        (role) => role === "ROLE_ADMIN" || role === "ROLE_MODERATOR"
                    )
                    &&
                    <Item key='21' icon={<LoginOutlined />} className="menuTopLeft" >
                        <Link to={"/nueva-cuenta"}>
                            <span className="nav-text">Registrar</span>
                        </Link>
                    </Item>
                }
                {
                    !user &&
                    <Item key='22' icon={<LoginOutlined />} className="menuTopLeft">
                        <Link to={"/login"}>
                            <span className="nav-text">Login</span>
                        </Link>
                    </Item>
                }
                {
                    user &&
                    <Item key='22' icon={<LogoutOutlined />} className="menuTopLeft">
                        <Link to={"/"} onClick={() => Api.logout()} >
                            <span className="nav-text">Salir</span>
                        </Link>
                    </Item>
                }
            </Menu>
        </div>
    )
}