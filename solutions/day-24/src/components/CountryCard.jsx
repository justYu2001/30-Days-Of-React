import React from 'react';

const CountryCard = ({ country }) => {    
    const { 
        name: { common: name },
        capital, 
        population, 
        languages, 
        currencies,
        flags: { png: imageURL },
    } = country;

    const languagesList = Object.entries(languages || { 'name': '' }).map(([_, value]) => value);
    const languagesListString = languagesList.join(', ');
    const languageTitle = languagesList.length > 1 ? 'Languages' : 'Language';

    const currenciesList = Object.entries(currencies || { 'c': { 'name': '' } }).map(([_, value]) => value.name);
    const currenciesListString = currenciesList.join(', ');
    const currencyTitle = currenciesList.length > 1 ? 'Currencies' : 'Currency';
    
    return (
        <li className='px-8 py-12 bg-white'>
            <img src={imageURL} alt={name} className='block h-48 mx-auto' />
            <h3 className='my-3 text-3xl text-amber-400 text-center'>{name}</h3>
            <p className='text-2xl text-neutral-600 font-bold'>Capital: {capital?.[0]}</p>
            <p className='text-2xl text-neutral-600 font-bold'>{languageTitle}: {languagesListString}</p>
            <p className='text-2xl text-neutral-600 font-bold'>Population: {population.toLocaleString('en-US')}</p>
            <p className='text-2xl text-neutral-600 font-bold'>{currencyTitle}: {currenciesListString}</p>
        </li>
    );
};

export default CountryCard;