import React from 'react';
import styles from './Pag.module.css';

export default function Paginate({countries, countryPerPage, pag}){
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(countries/countryPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className={styles.cont}>
            <nav>
                <ul>
                    {
                        pageNumbers && pageNumbers.map(number=>
                            <button className={styles.button} onClick= {()=> pag(number)}>{number}</button> 
                            )
                    }
                </ul>
            </nav>
        </div>
    )
}