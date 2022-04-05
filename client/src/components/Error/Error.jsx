import React from 'react';
import imageError from '../img/error.jpg';
import styles from './Error.module.css';
import gifError1 from '../img/error1.gif';
import gifError2 from '../img/error2.gif';
import gifError3 from '../img/error3.gif';
import gifError4 from '../img/error4.gif';
import gifError5 from '../img/error5.gif';
import gifError6 from '../img/error6.gif';
import gifError7 from '../img/error7.gif';
import gifError8 from '../img/error8.gif';

export default function Error(){

    return(
        <>
        <div className={styles.background}> 
             <img src={imageError} className={styles.stretch} alt="" />
        </div>
                    
            <div className={styles.gifCont}>
                <div className={styles.div1}><img className={styles.gif} src={gifError1}/></div>
                <div className={styles.div2}><img className={styles.gif} src={gifError2}/></div>
                <div className={styles.div3}><img className={styles.gif} src={gifError3}/></div>
                <div className={styles.div4}><img className={styles.gif} src={gifError4}/></div>
                <div className={styles.cont}>                
                <h1>PAJE NO FUNCA !!!</h1>
                <h2>Escribiste cualquiera...</h2>
                </div>                
                <div className={styles.div5}><img className={styles.gif} src={gifError5}/></div>
                <div className={styles.div6}><img className={styles.gif} src={gifError6}/></div>
                <div className={styles.div7}><img className={styles.gif} src={gifError7}/></div>
                <div className={styles.div8}><img className={styles.gif} src={gifError8}/></div>
            </div>
        
        </>
    )
}