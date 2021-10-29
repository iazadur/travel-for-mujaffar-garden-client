import React from 'react';

const InputField = ({}) => {
    const inputStyle = 'w-full mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4'
    return (
        <>
            <input
                type="text"
                name="company-website"
                id="company-website"
                className={inputStyle}
                placeholder="{k}"
            />
        </>
    );
};

export default InputField;