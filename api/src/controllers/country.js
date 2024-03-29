const axios = require('axios');
const { Country, Activity } = require('../db'); 
const { Op } = require('sequelize');

const getApiInfo = async () => {
    try {
        let apiInfo = (await axios.get('https://restcountries.com/v3/all')).data;
        console.log(apiInfo)
            apiInfo = await Promise.all(
                apiInfo.map(element => {
                    Country.findOrCreate({
                        where: {
                            id: element.cca3,
                            name: element.name.common,
                            flag: element.flags[1],                    
                            continent: element.continents[0],
                            capital: element.capital?element.capital[0]:'Capital not found',
                            subregion: element.subregion?element.subregion:'Subregion not found',
                            area: element.area,
                            population: element.population
                        },
                    });       
                })   
            );
            console.log(apiInfo)        
            return 'Countries successfully added in database...';
    } catch (error) {
        return(error)
    }    
};




const getIdCountry = async (req, res) => {
    try {
        const { id } = req.params;
        let countryId = await Country.findByPk(id.toUpperCase(),{            
            attributes: ['flag', 'name', 'continent', 'id', 'capital', 'subregion', 'area', 'population'],
            include: Activity
        })
        countryId ? res.send(countryId): res.send('The entered country does not exist.');
    } catch (error) {
        res.send(error);
    }
};


const getAllNameCountries = async (req, res) => {
    try {
        const { name } = req.query;
        let countryName = await Country.findAll({
            where: {
                name: {
                  [Op.iLike]: `%${name}%`,
                },
            },   
            attributes: ['flag', 'name', 'id', 'continent', 'population', 'area', 'capital'],
        })
        if(name){
            countryName.length > 0 ? res.send(countryName): 
            res.status(404).send('The entered country does not exist.');
        }else{
            const dbInfo = await Country.findAll({
                attributes: ['flag', 'name', 'id', 'continent', 'population', 'capital', 'area'], 
                include : Activity           
            })
            res.send(dbInfo); 
        }        
    } catch (error) {
        res.send(error);
    }
};


module.exports = {
    getApiInfo,
    getIdCountry,
    getAllNameCountries
}