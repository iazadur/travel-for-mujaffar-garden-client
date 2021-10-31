import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../asserts/notfoundpage.png'

const NotFound = () => {
    return (
        <>
            <div className="container mx-auto h-screen" >
            <img className="w-full" src={errorPage} alt="" />
            <Link to="/"  className="py-2 px-3 bg-indigo-700 text-center block font-semibold text-gray-100 text-xl rounded-lg">Back To Home Page</Link>
            </div>
        </>
    );
};

export default NotFound;