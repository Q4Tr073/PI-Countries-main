import React from "react";
import ImageLoading from '../img/loading.gif';
import styles from './Loading.module.css'


export default function Loading({setLoading}){
    return(
        <div>
            <div>
                <div className={styles.loadingDiv}>
                    <p className={styles.loading}>Loading...</p>
                    <div>
                        <img src={ImageLoading} className={styles.imgLoad} alt=''/>
                    </div>                                
                </div>
                <div>
                    {setTimeout(() => {
                    setLoading(false);
                    }, 1000)}
                </div>
            </div>
        </div>
    )
}