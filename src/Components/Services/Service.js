import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { Title, Price, Description, btnColor, Image } = props;
    return (
        <div className="space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 box-border rounded-xl my-16">
            <img className="" src={Image} alt={Title} />
            <div className="space-y-3 p-4">
                <h1 className="text-gray-600 poppins text-xl">{Title}</h1>
                <hr />
                <p className="text-gray-500">{Description.slice(0, 70)}</p>
<hr /><br />
                <div className="flex justify-between">
                <Link to="/bookNow" style={{ backgroundColor: `${btnColor}` }} className="text-sm px-3 py-1 rounded-xl text-white  ">Book Now</Link>

                <h3 style={{color:`${btnColor}` }}>$ {Price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Service
