import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import PropLoader from '../PropLoader/PropLoader';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('https://ghastly-warlock-95280.herokuapp.com/orders')
            .then(res => {
                setOrders(res.data);
            })
    }, [])

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(() => {
                axios.delete(`https://ghastly-warlock-95280.herokuapp.com/orders/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            swal("Good job!", "deleted successfully!", "success");
                            const remainingUsers = orders.filter(user => user._id !== id);
                            setOrders(remainingUsers);
                        }
                    })
            })
    }

    return (
        <>


            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            User Details
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Service details
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>

                                    </tr>
                                </thead>
                                {
                                    orders.length === 0 ?
                                        <div className="text-center mt-24 h-screen ">
                                            <PropLoader />
                                        </div> :
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {orders.map((order) => (
                                                <tr key={order._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={order.img} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">{order.name}</div>
                                                                <div className="text-sm text-gray-500">{order.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{order.serviceName}</div>
                                                        <div className="text-sm text-gray-500">$ {order.servicePrice}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {order.status ? "active" : "pending"}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.roll ? "admin" : "user"}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">

                                                        <Link to={`/orderDetails/${order._id}`}> <AiFillEdit className="text-indigo-600 font-extrabold text-2xl hover:text-indigo-900 ml-3" /></Link>
                                                        <AiOutlineDelete onClick={() => handleDelete(order._id)} className="text-red-600 cursor-pointer font-extrabold text-2xl hover:text-red-900 ml-3" />


                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ManageAllOrders;