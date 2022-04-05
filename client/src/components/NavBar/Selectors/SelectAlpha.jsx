import React  from 'react';
import {useDispatch} from 'react-redux';
import {filterAlpha} from '../../../Redux/Actions';
import styles from '../NavBar.module.css';


export default function SelectorAlpha({setOrder}){
    
    const dispatch = useDispatch();

    function handleApha(e){
        e.preventDefault();
        dispatch(filterAlpha(e.target.value));
        setOrder(`Ordered ${e.target.value}`);
    }

    return(
        <div>
            <select className={styles.select} onClick={(e)=> handleApha(e)} defaultValue = 'default'>
                <option value="default" disabled>Select order</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )
}