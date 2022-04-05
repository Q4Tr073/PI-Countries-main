import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {getDeatils} from '../../../Redux/Actions'
import Activity from './Activity';
import styles from './Details.module.css';
import imageDetails from '../../img/detalles.jpg';

export default function Details(){

    const {id} = useParams();
    const dispach= useDispatch();
    const details = useSelector((state)=>state.details);

    useEffect(()=> {
        dispach(getDeatils(id))
    },[dispach,id])

    return(
        <>
        <div className={styles.background}> 
             <img src={imageDetails} className={styles.stretch} alt="" />
        </div>
        <div className={styles.cont}>
            <h1 className={styles.h1}>{details.name}</h1>
            <img className={styles.img} src={details.flag} alt=''/>            
            <h2>Continent: {details.continent}</h2>            
            <h2>Capital: {details.capital}</h2>
            <h2>Subregion: {details.subregion}</h2>
            <h2>Area: {details.area}</h2>
            <h2>Population: {details.population}</h2>
            <div className={styles.divAct}>
                {     
                    details.activities?.map((el) => {
                        return(                           
                            <Activity 
                                key= {el.id}                                       
                                name= {el.name} 
                                difficulty= {el.difficulty} 
                                duration= {el.duration}
                                season= {el.season}
                            />                           
                        )}) 
                } 
            </div>                       

            <Link to='/countries'>
                <button className={styles.button}>Back</button>
            </Link>            
        </div>
        </>
    )
}