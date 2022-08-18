import { useState, useEffect } from 'react';
import axios from 'axios';

const CatCard = ({ data }) => {
    const { 
        description, 
        id, 
        life_span: lifeSpan, 
        name, origin, 
        temperament, 
        weight 
    } = data;

    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const initializeImageURL = async () => {
            const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`;
            const response = await axios.get(URL);
            setImageURL(response.data[0].url);
        };

        initializeImageURL();
    }, []);

    return (
        <li className='w-2/5 mx-auto my-9 bg-white shadow-md'>
            <div className="h-[30rem] overflow-hidden">
                <img src={imageURL} alt={name} className='transition-all ease-out duration-500 hover:scale-125' />
            </div>
            <div className='p-4'>
                <p>{name}</p>
                <p className='font-bold'>{origin}</p>
                <p>Temperament: {temperament}</p>
                <p>Life span: {lifeSpan} years</p>
                <p>Weight: {weight.metric} kg</p>
                <h3 className='my-2'>Description</h3>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default CatCard;