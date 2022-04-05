import React from 'react';
import { useDispatch } from 'react-redux';
import {populationOrder} from '../../../Redux/Actions';
import styles from '../NavBar.module.css';

export default function SelectorPopulation({setOrder, setCurrentPage}){

    const dispatch = useDispatch();

    function handlePopulation(e){
        e.preventDefault();
        dispatch(populationOrder(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    return(
        <div>
            <select className={styles.select} onChange={e=> handlePopulation(e)}>
                <option>By Population</option>
                <option value = 'High'>Lower</option>
                <option value = 'Low'>Higher</option>
            </select>
        </div>
    )
}