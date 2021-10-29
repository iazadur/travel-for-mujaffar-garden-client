import React from 'react'

const Button = ({ style, text, ...rest }) => {
    return <button style={{ backgroundColor: `${style}` }} className="w-full py-2 mt-2 poppins bg-gray-200 rounded-lg" {...rest}>{text}</button>
}

export default Button
