import React from 'react';

const Footer = () => {
    return (
        <footer className='p-8 border-t-2 shadow-2xl'>
            <p className='text-center'>Copyright©2020 30 Days Of React</p>
            <p className='text-center'>Join 30 Days of React challenge</p>
            <p className='text-center'>Designed and Built by justYu2001</p>
            <div className='flex justify-end py-3'>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;