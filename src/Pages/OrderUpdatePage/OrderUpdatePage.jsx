import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const OrderUpdatePage = () => {
    const [order, setOrder] = useState({})
    const { register, handleSubmit,reset } = useForm({
        defaultValues: order,
    });
    const { id } = useParams()
    const url = `http://localhost:5000/updateOrders/${id}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setOrder(res.data)
                reset(res.data)
            })
            
    }, [reset,url])
    const { serviceName, status, servicePrice } = order

    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/updateOrder/${id}`
        axios.put(url, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal("Good job!", "Updated SuccessFully!", "success");
                }
            })
    };



    return (
        <>
            <Header></Header>
            <div className="container mx-auto shadow-lg rounded-lg my-20">
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>


                <div className="mt-10 sm:mt-0 ">
                    <div className="md:grid md:grid-cols-3 md:gap-6">

                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-2xl font-bold text-center leading-6 text-indigo-900 ">Order item</h3>
                                <div className="h-1 w-20 bg-indigo-700 mx-auto mt-3"></div>
                                <p className="mt-1 text-sm text-gray-600 mx-3">

                                    <div className="space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-102 box-border rounded-xl my-8">

                                        <div className="space-y-3 p-4 divide-y divide-indigo-200 ">
                                            <h1 className="text-gray-600 poppins text-xl">{serviceName}</h1>



                                            <div className="flex justify-between pt-3">


                                                <h3>Price: $ {servicePrice}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 md:col-span-4 ">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Full name
                                                </label>
                                                <input {...register("name",)}
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Order Status
                                                </label>
                                                <select
                                                    {...register("status", { required: true })}
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >

                                                    {status ? <option value="true" selected>Active</option> : <option value="true">Active</option>}
                                                    {status ? <option value="false">pending</option> : <option value="false" selected>Pending</option>}

                                                </select>




                                            </div>



                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("email",)}
                                                    className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("phone",)}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>



                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("address",)}
                                                    autoComplete="street-address"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    From Date
                                                </label>
                                                <input
                                                    type="date"
                                                    {...register("fromDate",)}
                                                    autoComplete="address-level2"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                    To Date
                                                </label>
                                                <input
                                                    type="date"
                                                    {...register("toDate",)}
                                                    autoComplete="address-level1"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>


                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Proceed to payment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );


};

export default OrderUpdatePage;