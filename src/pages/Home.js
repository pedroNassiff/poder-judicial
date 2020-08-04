import React from 'react'
import CardGrid from 'componentes/cardGrid'
import './Home.scss'

export default function Home() {
    return (
        <div>
            <div>
                <h1>Carrousel noticias</h1>
            </div>
            <div className='cardGrid'>
                <CardGrid/>
            </div>
        </div>
    )
}