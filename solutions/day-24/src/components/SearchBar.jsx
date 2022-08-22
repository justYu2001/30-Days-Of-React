import React from 'react';
import { AiOutlineSearch, AiOutlineBarChart } from 'react-icons/ai';

const SearchBar = ({ setKeyword }) => {
    const updateKeyword = (event) => setKeyword(event.target.value);

    return (
        <div className='pb-8'>
            <div className='relative w-3/5 mx-auto'>
                <input 
                    type="text" 
                    className='w-full p-2 border-b-2 border-slate-100 text-2xl outline-none peer focus:border-amber-400'
                    placeholder='Search for a country'
                    onChange={updateKeyword}
                />
                <AiOutlineSearch className='absolute top-2 right-2 text-slate-100 text-4xl peer-focus:text-amber-400' />
            </div>
            <a href="#chart">
                <AiOutlineBarChart className='text-6xl mx-auto mt-6 cursor-pointer transition-colors duration-300 hover:text-amber-400' />
            </a>
        </div>
    );
};

export default SearchBar;