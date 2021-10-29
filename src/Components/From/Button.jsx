import React from 'react'

const Button = ({ text, ...rest }) => {
    return <button className="w-full py-2 mt-2 poppins bg-gray-200 rounded-lg" {...rest}>{text}</button>
}

export default Button
