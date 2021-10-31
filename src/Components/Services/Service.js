import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id,Title, Price, Description, btnColor, Image } = props;
    return (
        <div className="space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 box-border rounded-xl my-16">
            <img className="w-full h-64" src={Image} alt={Title} />
            <div className="space-y-3 p-4 divide-y divide-indigo-200 ">
                <h1 className="text-gray-600 poppins text-xl">{Title}</h1>

                <p className="text-gray-500 pt-2 ">{Description}</p>

                <div className="flex justify-between pt-3">
                    <Link to={`/bookNow/${_id}`} style={{ backgroundColor: `${btnColor}` }} className="text-sm px-3 py-1 rounded-xl text-white  ">Book Now</Link>

                    <h3 style={{ color: `${btnColor}` }}>$ {Price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Service
