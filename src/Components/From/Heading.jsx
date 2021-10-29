import React from 'react';

const Heading = ({text}) => {
    return (
        <>
            <h2 className="text-2xl font-bold leading-7 text-indigo-900 sm:text-4xl sm:truncate text-center my-3">{text}</h2>
            <div className="h-2 w-52 rounded-lg mx-auto bg-indigo-400"></div>
        </>
    );
};

export default Heading;