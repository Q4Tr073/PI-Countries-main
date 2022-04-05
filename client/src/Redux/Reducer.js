import {
    GET_COUNTRIES,
    GET_DETAILS,
    GET_ACTIVITIES,
    GET_NAME_COUNTRIES,
    FILTER_ACTIVITY,
    FILTER_BY_ALPHA,
    FILTER_CONTINENT,
    POPULATION_ORDER,
} from './Constants'
const initState ={
    countries: [],
    allCountries: [],
    details: [],
    activities: [],    
}

const reducer=(state= initState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
                return{
                    ...state,
                    countries: action.payload,
                    allCountries: action.payload
                }
        case GET_DETAILS:
            return{
                ...state,
                details: action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,                    
                activities: action.payload
            }
        case GET_NAME_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
            }
                     
        case FILTER_BY_ALPHA:            
            const sortAlph = action.payload === "A-Z"
            ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
            : state.allCountries.sort((a, b) => b.name.localeCompare(a.name));
                return{
                    ...state,
                    countries: sortAlph 
                }

        case FILTER_CONTINENT:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent === action.payload) 
            return{
                ...state,
                countries: continentFiltered,                
            }
        case POPULATION_ORDER:            
            const PopulationArray =  action.payload === 'High' ? 
                state.countries.sort(function(a, b){
                   return a.population - b.population;                   
                }):
                state.countries.sort(function(a, b){
                    return b.population - a.population;
                })  
            return{
                ...state,
                countries: PopulationArray
            }
            case FILTER_ACTIVITY:

                const allActCountries = state.allCountries;
                const actFilter = action.payload === 'All' ? allActCountries.filter(el => el.activities.length > 0) 
                : allActCountries.filter(el => el.activities && el.activities.map(el => el.name).includes(action.payload)); 
                return{
                    ...state,
                    countries: actFilter
                }

        default:
            return {...state, }
    }
}

export default reducer;