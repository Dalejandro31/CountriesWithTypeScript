import axios from 'axios';
import {Country, Activity} from '../db';


async function getCountries (){
    const saveCountries: any[] = [];

    const url = await axios.get('https://restcountries.com/v3.1/all');
    await url.data.map((c:any)=>{
        let info ={
            id: c.cca3,
            name: c.name.common,
            flag: c.flags.svg,
            capital: c.capital ? c.capital : 'no tiene capital',
            region: c.region,
            subregion: c.subregion ? c.subregion : 'no tiene subregion',
            area: c.area ? c.area : 'no tiene area',
            population: c.population,
        };
        saveCountries.push(info);
        console.log('estoy aqui!')
    });
    return[...new Set(saveCountries)];
    
};

export default getCountries;

