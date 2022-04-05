import React, {useState} from 'react';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import styles from './Home.module.css';
import imageHome from '../img/Home.jpg';

export default function Home(){

    const [order, setOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    return(
        <>
        <div className={styles.background}> 
             <img src={imageHome} className={styles.stretch} alt="" />
        </div>
        {
            loading === true? <Loading setLoading={setLoading}/>:
        <div>
            <NavBar setOrder={setOrder} setCurrentPage={setCurrentPage}/>
            <SearchBar/>
            <Cards/>
        </div>
        }        
        </>
    )
}