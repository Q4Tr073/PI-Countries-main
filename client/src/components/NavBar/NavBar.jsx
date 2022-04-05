import React from 'react';
import SelectActivity from './Selectors/SelectActivity';
import SelectAlpha from './Selectors/SelectAlpha';
import SelectCountinent from './Selectors/SelectCountinent';
import SelectorPopulation from './Selectors/SelectPopulation';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo from '../img/logo.gif';

export default function NavBar({setOrder, setCurrentPage}){

    

    return(
        <div className={styles.cont}>
            <Link to='/'>
                <img src={Logo} className={styles.logo}/>
            </Link>
            <SelectActivity/>
            <SelectAlpha setOrder={setOrder}/>
            <SelectCountinent/>
            <SelectorPopulation setOrder={setOrder} setCurrentPage={setCurrentPage}/>
            <Link to='/create'>
                <button className={styles.button}>Create Activities</button>
            </Link>
        </div>
    )
}