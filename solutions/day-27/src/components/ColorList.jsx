import React from 'react';
import useClipboard from '@/hook/useClipboard';
import useTimeout from '@/hook/useTimeout';
import { MdContentCopy } from 'react-icons/md';

const SuccessMask = () => {
    return (
        <div className='abs inset:0 bg:green-80 f:24 f:white lh:160px r:5'>
            Copied!
        </div>
    );
}

const ColorBlock = ({ color }) => {
    const { success, resetSuccess, copyToClipboard } = useClipboard();
    const { reset } = useTimeout(resetSuccess, 1500);

    const handleGenerateButtonClick = () => {
        copyToClipboard(color);
        reset();
    };

    return (
        <li className={`rel w:160 h:160 my:6 bg:${color} r:5 text:center list-style:none`}>
            {success && <SuccessMask />}
            <p className='f:20 f:white f:medium'>{color}</p>
            <button 
                className='pt:4 bg:transparent b:none cursor:pointer outline:none'
                onClick={handleGenerateButtonClick}
            >
                <MdContentCopy className='f:white f:24' />
            </button>
        </li>
    );
};

const ColorList = ({ colorList }) => {
    return (
        <ul className='flex flex:wrap jc:space-between w:4/5 pt:10 pl:0 mx:auto'>
            {colorList.map((color) => <ColorBlock key={color} color={color} />)}
        </ul>
    );
};

export default ColorList;