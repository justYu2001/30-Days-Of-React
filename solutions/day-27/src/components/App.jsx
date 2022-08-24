import React, { useState, useEffect, useRef } from 'react';
import '@master/css';

import Header from '@/layouts/Header';
import ColorList from '@/components/ColorList';

const generateHexColor = () => {
    const { floor, random } = Math;
    const allHexNumbers = '0123456789abcdef';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += allHexNumbers[floor(random() * 16)];
    }

    return color;
};

const App = () => {
    const inputRef = useRef(null);

    const [colorList, setColorList] = useState([]);

    const generateColorList = () => {
        const numberString = inputRef.current.value === '' ? '27' : inputRef.current.value;
        const number = parseInt(numberString);
        setColorList([...Array(number)].map(() => generateHexColor()));
    }

    useEffect(() => {
        setColorList([...Array(27)].map(() => generateHexColor()));
    }, []);

    return (
        <>
            <Header />
            <div className='flex w:4/5 mx:auto mt:80' >
                <input 
                    type="text" 
                    ref={inputRef} 
                    className='flex:1 mr:20 my:0 bt:none bx:none bb:3|solid|gray-86 bb:3|solid|purple-60:focus f:20 outline:none' 
                />
                <button 
                    className='p:15|80 b:none bg:purple-60 r:5 f:white outline:none cursor:pointer'
                    onClick={generateColorList}
                >
                    GENERATE
                </button>
            </div>
            <ColorList colorList={colorList} />
        </>
    );
};

export default App;