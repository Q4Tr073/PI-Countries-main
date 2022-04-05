import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {filterAct} from '../../../Redux/Actions';
import {getActivities} from '../../../Redux/Actions';
import styles from '../NavBar.module.css';


export default function SelectActivity(){
    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities);

    
    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch])

    
    function handleActivity(e) {
        e.preventDefault();
        dispatch(filterAct(e.target.value));
    }

    return(
        <div>
            <select className={styles.select} onChange= {e => handleActivity(e)}>
                <option value = 'All'>Activities Created</option>
                {
                allActivities.map((el)=> {console.log(el.name)
                    return(         
                            <option value = {el.name} key= {el}>{el.name}</option>
                    )})    
                }                             
            </select>
        </div>           
    )
}    
