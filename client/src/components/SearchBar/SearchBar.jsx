import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../../Redux/Actions';
import styles from './Search.module.css';
import Logo from '../img/logo1.png';



export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    

    function handleInputCountries(e) {
        e.preventDefault();        
        setName('')
        setName(e.target.value);        
    }

    function handleSubmitCountries(e) {
        e.preventDefault();
        if (name.length > 0) {
            dispatch(getNameCountries(name));
            setName('');
        }else{
            alert('Enter a country please!!')
        }                
    }  
    
    return(
        <div className={styles.cont}>
            <a href="/countries">
                <img src={Logo} className={styles.logo}/>
            </a>
            <input className={styles.input} type="text" placeholder={'Country...'} value = {name} onChange= {e => handleInputCountries(e)}/> 
            <button className={styles.button} type="submit" onClick= {e => handleSubmitCountries(e)}>Search</button>
        </div>
    )
}
