import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const{name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)
    const handleClick =() =>{
        setVisited(!visited)
    }
   
    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'purple': 'Black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisitedFlag}>Show Flag</button>
            <button onClick={handleClick}>{visited ? 'visited': 'Going'}</button>
            <br />
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button>
            {visited? 'I have visited this country': 'I want to visit'}
        </div>
    );
};

export default Country;