import React from 'react';

const inputCanHandleAllType = (InputComponent) => {
    return (props) => {
        const { onChange: callback , ...restProps } = props;

        const handleChange = (event) => {
            const { name, type, value, checked } = event.target;
    
            if (type === 'checkbox') {
                callback(name, checked);
            } else if (type === 'file') {
                callback(name, event.target.files[0]);
            } else {
                callback(name, value);
            }
        };

        return (
            <InputComponent {...restProps} onChange={handleChange} />
        );
    };
};

const Input = ({ type, name, onChange }) => {    
    return (
        <input type={type} name={name} onChange={onChange} />
    );
}

const SuperInput = inputCanHandleAllType(Input);


const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <SuperInput type='text' name='name' onChange={(name, value) => console.log(name, value)} />
            <SuperInput type='checkbox' name='checkbox' onChange={(name, value) => console.log(name, value)} /> 
            <SuperInput type='date' name='date' onChange={(name, value) => console.log(name, value)} />
            <SuperInput type='range' name='range' onChange={(name, value) => console.log(name, value)} />
            <SuperInput type='email' name='email' onChange={(name, value) => console.log(name, value)} />
            <SuperInput type='color' name='color' onChange={(name, value) => console.log(name, value)} />
            <SuperInput type='reset' name='reset' onChange={(name, value) => console.log(name, value)} />
        </div>
    );
};

export default App;