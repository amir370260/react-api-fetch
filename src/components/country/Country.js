import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className='country'>
            <h4>This is , {name}</h4>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <h5>Capital is {capital} and Population: {population}</h5>
        </div>
    );
};

export default Country;