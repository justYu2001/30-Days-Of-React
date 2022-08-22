import React from 'react';

const Header = ({ numberOfCountry }) => {
    return (
        <header className='p-10 font-bold text-center'>
            <h1 className='text-6xl text-amber-400'>World Countries Data</h1>
            <p className='my-2 text-2xl'>Currently, we have {numberOfCountry} countries</p>
        </header>
    );
};

export default Header;