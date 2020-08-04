import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'componentes/auth/Login.scss'

const NuevaCuenta = () => {

    //state para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        rol: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario

    const { nombre, email, rol, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //validar para que no haya campos vacios

        //Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                     <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Rol">Rol</label>
                        <input
                            type="text"
                            id="rol"
                            name="rol"
                            placeholder="Rol"
                            value={rol}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        
                        value="Crear" />

                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Volver a iniciar sesión
                </Link>    
            </div>
        </div>
    );
}

export default NuevaCuenta;