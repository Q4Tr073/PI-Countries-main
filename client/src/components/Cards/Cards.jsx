import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCountries} from '../../Redux/Actions';
import Paginate from '../Paginado/Paginate';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

export default function Cards(){
    const countries = useSelector((state)=> state.countries);      
    const [currentPage, setCurrentPage]= useState(1);
    const [countryPerPage] = useState(9);
    const indexOfLastCountry = currentPage*countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountire= countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const pag=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    return (
        <div>
            <Paginate countryPerPage={countryPerPage} countries={countries.length} pag={pag}/>
            <div >
                <span className={styles.cont}>
                {
                    currentCountire?.map((el)=>{
                        return (
                            <Link to={`/countries/${el.id}`}>
                            <div className={styles.card} key={el.id}>
                                <div className={styles.card2}>                                    
                                    <img className={styles.img} src={el.flag} alt=''/>                                                                   
                                    <h2>Name: {el.name}</h2>                                
                                    <h2>Continent: {el.continent}</h2>
                                </div>                               
                            </div>
                            </Link>                                                                   
                        )
                    })
                }
                </span>
            </div>
            <Paginate countryPerPage={countryPerPage} countries={countries.length} pag={pag}/>                
        </div>
    )

}