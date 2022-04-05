import React from 'react';
import { Link } from 'react-router-dom';
import imageLand from './img/landing.gif';
import styles from './Landing.module.css';

export default function LandingPage(){

    return(
        <>
        <div className={styles.background}> 
             <img src={imageLand} className={styles.stretch} alt="" />
        </div>
        <div className={styles.cont}>
            <h2>Travel around our beautiful planet...</h2>
            <h1>COUNTRIES APP!!!</h1>
            <Link to='/countries'> 
                <button className={styles.button}>WELCOME!!!</button>
            </Link>
        </div>
        </>
    )
}