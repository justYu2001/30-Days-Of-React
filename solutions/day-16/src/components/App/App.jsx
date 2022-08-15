import React from 'react';

const inputCanHandleAllType = (InputComponent, callback) => {
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

    return (props) => <InputComponent {...props} onChange={handleChange} />;
};

const Input = ({ type, name, onChange }) => {
     const styles = {
        padding: '5px 10px',
        outline: 'none'
     };
    
    return (
        <input type={type} name={name} style={styles} onChange={onChange} />
    );
}

const TextInput = inputCanHandleAllType(Input, (name, value) => {
    console.log(name, value);
});


const App = () => {
  return (
    <div>
      <TextInput type='text' name='name' />
    </div>
  );
};

export default App;