import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postActivity, getAllCountries, getActivities } from '../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CreateAct.module.css';
import imageAct from '../img/Activities2.jpg';

 

const validationForm = (input) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!input.name.trim()){
        errors.name = "*Name required";
    }else if(!regexName.test(input.name.trim())){
        errors.name = "*The name field only accepts letters and blank spaces";
    };
    if(!input.difficulty){
        errors.difficulty = "*Difficulty required";
    }
    if(!input.duration){
        errors.duration = "*Duration required";
    }else if(input.duration < 1 || input.duration > 24){
        errors.duration = "*The duration must be between 1 and 24 hours";
    };
    if(!input.season){
        errors.season = "*Season required";
    }
    if(input.countries.length === 0){
        errors.countries = "*Country required";
    }
    return errors;
}


export default function ActivityCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    }) 
    
    useEffect(() => {
        dispatch(getAllCountries()); 
        dispatch(getActivities());       
    }, [dispatch]);
    

    function handleChange(e) {              
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validationForm({
            ...input,
            [e.target.name]: e.target.value
        }))
    }    
    

    function handleSelect(e) {
        if (input.countries.includes(e.target.value)) {
            alert('The country has already been selected!!')
        } else {
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]                
            }) 
            setErrors(validationForm({
                ...input,
                countries: [...input.countries, e.target.value]
            }))           
        }               
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validationForm(input));
        if (input.name && input.difficulty && input.duration && input.season && input.countries.length && !Object.keys(errors).length) {
            dispatch(postActivity(input));
            alert('Activity Created Successfully!!');
            navigate('/countries')
            setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
            })
        } else {
            alert('All fields are required!!')
        }                
    } 

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(element => element !== e)
        })
    }


    return(
        <>
        <div className={styles.background}> 
             <img src={imageAct} className={styles.stretch} alt="" />
        </div>
        <div className= {styles.divForm}>            
            <h1 className={styles.h1}>Create  your Activity</h1>
            <div>           
                <form onSubmit= {e => handleSubmit(e)}>
                    <div className={styles.titulo}>
                        <label className={styles.titulo}>Name: </label>
                        <input className= {styles.inputs} type= 'text' name= 'name' onChange= {handleChange}/>
                        {errors.name && <p className= {styles.pErrors}>{errors.name}</p>}                   
                    </div>
                    <div className={styles.titulo}>
                        <label className={styles.titulo}>Difficulty: </label>
                        <select className= {styles.inputs} name= 'difficulty' onChange= {handleChange}>                        
                            <option>Please select</option>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                        {errors.difficulty && <p className= {styles.pErrors}>{errors.difficulty}</p>}                    
                        </div>
                        <div className={styles.titulo}>
                            <label className={styles.titulo}>Duration: </label>
                            <input className= {styles.inputs} type= 'number' placeholder= 'Enter the duration in hours' name= 'duration' onChange= {handleChange}/> 
                            {errors.duration && <p className= {styles.pErrors}>{errors.duration}</p>}                   
                        </div>
                        <div className={styles.titulo}>
                            <label className={styles.titulo}>Season: </label>
                            <select className= {styles.inputs} name= 'season' onChange= {handleChange}>                        
                                <option value= ''>Please Select</option>
                                <option value = 'summer'>Summer</option>
                                <option value = 'fall'>Fall</option>
                                <option value = 'winter'>Winter</option>
                                <option value = 'spring'>Spring</option>
                            </select>
                            {errors.season && <p className= {styles.pErrors}>{errors.season}</p>}
                        <div className={styles.titulo}>
                            <label className={styles.titulo}>Country: </label>      
                            <select className= {styles.inputs} name= 'countries' placeholder= 'Select Countries'onChange= {e => handleSelect(e)}>                                    
                                <option value= ''>Select Countries</option>
                                {countries.map((element) =>(
                                    <option value = {element.name}>{element.name}</option>
                                ))}                       
                            </select>
                            {errors.countries && <p className= {styles.pErrors}>{errors.countries}</p>}
                        </div>
                            <div className={styles.titulo}>
                                <button className={styles.button} type= 'submit'>To Create</button>
                            </div>
                        </div>
                </form>
            </div>
            {
                input.countries.map((element) => 
                    <div>                        
                        <p>{element}</p>
                        <button className={styles.button} onClick= {() => handleDelete(element)}>X</button>                       
                    </div>
                )
            }
            <Link to = '/countries'><button className={styles.button}>Back to Home</button></Link>
        </div>
        </>
    )
}
