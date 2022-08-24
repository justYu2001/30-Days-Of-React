import { useState, useRef } from 'react';

const NumberInput = () => {
    const inputRef = useRef(null);

    const [colorList, setColorList] = useState([]);

    const generateColorList = () => {
        const number = inputRef.current.value;
        setColorList(Array(number).fill());
    }
    
    return (
        <div className='flex w:4/5 mx:auto mt:80' >
            <input type="text" ref={inputRef} className='flex:1 m:0|10' />
            <button 
                className='p:15|80 b:none bg:purple-60 r:5 f:white outline:none cursor:pointer'
                onClick={generateColorList}
            >
                GENERATE
            </button>
        </div>
    );
};

export default NumberInput;