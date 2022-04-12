import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = () => {
    const [countries , setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data=> setCountries(data))

    },[]);

    return (
        <div>
            <h3>Hello From All Countries</h3>
            <div className='countries'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;