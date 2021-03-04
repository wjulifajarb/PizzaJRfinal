import React from 'react';
import Image from 'react-bootstrap/Image'
import Pizza1 from '../../img/flavors/salami.png';
import '../../styles/mainViews/Home.css';
import '../../App.css';
import { Link } from "react-router-dom";
import BgVector from '../pieces/BgVector';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';

function Home () {
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='RectangleHome'>
                <CircleLogo />
                <div className='PizzaContainer'>
                <Image src={Pizza1} className='Pizza1' />
                <div className = 'TITLE'> <h1>PIZZA JR</h1></div>
                </div>
                <Link to="/Menu" className='LinkMenu'>
                    <BackButton Text='Explorar' />
                </Link>
                
            </div>
        </div>
    )
}

export default Home;