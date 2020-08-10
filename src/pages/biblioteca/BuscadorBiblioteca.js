import React from 'react';
import './BuscadorBiblioteca.scss'
import { Button, Input } from 'antd';

const BuscadorBiblioteca = () => {
    return (
        <div className="bibliotecaContainer">
            <div className="titleContainer">
                <h1>Biblioteca</h1>
                <span>
                    Seleccione el tipo de información que necesite y luego escribe el campo de búsqueda.
                </span>
            </div>
            <div className="selectContainer">
                <Button className='selectButton1'>Reglamentos</Button>
                <Button className='selectButton2'>Resoluciones</Button>
                <Button className='selectButton3'>Leyes</Button>
                <Button className='selectButton4'>Legislaciones</Button>
            </div>
            <div className="SearchContainer">
                <Input
                    className='searchInput'
                    type="text"
                    name="mensaje"
                    placeholder="Que buscas?"
                />
                <Button className='selectButton5'>Buscar</Button>
            </div>
            <div className="resultContainer">
                
            </div>
        </div>
    );
};

export default BuscadorBiblioteca;