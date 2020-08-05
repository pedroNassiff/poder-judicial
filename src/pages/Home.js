import React from 'react'
import CardGrid from 'componentes/cardGrid'
import Carousel from 'componentes/carouselNotices'
import './Home.scss'

export default function Home() {
    return (
        <div>
            <div>
                <Carousel/>
            </div>
            <div className='cardGrid'>
                <CardGrid/>
            </div>
        </div>
    )
}