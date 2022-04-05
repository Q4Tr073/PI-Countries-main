import axios from 'axios';
import {
    COUNTRIES_URL,
    ACTIVITY_URL,
    GET_COUNTRIES,
    GET_DETAILS,
    GET_ACTIVITIES,
    GET_NAME_COUNTRIES,
    FILTER_ACTIVITY,
    FILTER_BY_ALPHA,
    FILTER_CONTINENT,
    POPULATION_ORDER,
}from './Constants';

export function getAllCountries(){
    return function(dispatch){
        return fetch (COUNTRIES_URL)
        .then(response=>response.json())
        .then(res=>
            dispatch({
                type: GET_COUNTRIES,
                payload: res
            })
        )
    }
}
export function getDeatils(id){
    return function(dispatch){
        return fetch(COUNTRIES_URL + "/" + id)
        .then(response => response.json())
        .then(res=>{
            dispatch({
                type: GET_DETAILS,
                payload: res
            })
        })
    }
}

// export function getActivities(){
//     return function(dispatch){
//         return fetch ( ACTIVITY_URL )
//         .then (response=> response.json())
//         .then(res=>{
//             dispatch({
//                 type: GET_ACTIVITIES,
//                 payload: res
//             })
//         })
//     }
// }

export function getActivities(){
    return async function(distpach){
    try {
        const actJson = await axios.get(ACTIVITY_URL);
        return distpach({
            type: GET_ACTIVITIES,
            payload: actJson.data
        })
    }catch (error) {
        return(error)
        }       
    }
}
export function getNameCountries(name){
    return async function(distpach){
    try {
        const countriesJson = await axios.get(COUNTRIES_URL + "?name=" + name);
        return distpach({
            type: GET_NAME_COUNTRIES,
            payload: countriesJson.data
        })
    } catch (error) {
        if (error.response) {
            alert(error.response.data)
        }
    }        
    }
}

// POST 

export function postActivity(payload){
    return async function(distpach){
        const newActivity = await axios.post(ACTIVITY_URL, payload);
        return newActivity;
    }
}

// FILTERS 

export function filterAct(payload){
    return {
            type: FILTER_ACTIVITY,
            payload,
        }
}
export function filterAlpha(payload){
    return {
        type:FILTER_BY_ALPHA,
        payload
    }
}
export function filterContinent(payload){
    return{
            type: FILTER_CONTINENT,
            payload,
        }
}
export function populationOrder(payload){
    return{
            type: POPULATION_ORDER,
            payload,
        }
}
