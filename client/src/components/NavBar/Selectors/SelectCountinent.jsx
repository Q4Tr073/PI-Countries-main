import React from 'react';
import {filterContinent} from '../../../Redux/Actions';
import { useDispatch } from 'react-redux';
import styles from '../NavBar.module.css';

export default function SelectorContinent(){

    const dispatch = useDispatch();


    function handleContinents(e){
        e.preventDefault();
        dispatch(filterContinent(e.target.value));
    }

    return(
        <div>
            <select className={styles.select} onChange={e=> handleContinents(e)}>
                <option value = 'All'>All Continents</option>  
                <option value = 'Antarctica'>Antarctica</option>              
                <option value = 'Europe'>Europe</option>
                <option value = 'Africa'>Africa</option>
                <option value = 'Oceania'>Oceania</option>
                <option value = 'Asia'>Asia</option>
                <option value = 'North America'>North America</option>
                <option value = 'South America'>South America</option>                
            </select>
        </div>
    )
}