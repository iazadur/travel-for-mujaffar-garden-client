import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const BookNowPage = () => {
    const { user } = useAuth()
    const [service, setService] = useState({})
    const { id } = useParams()
    const url = `https://ghastly-warlock-95280.herokuapp.com/bookNow/${id}`
    useEffect(() => {
        axios.get(url)
            .then(res => setService(res.data))
    }, [url])
    const { Title, Image, Description, btnColor, Price } = service

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.img = user.photoURL
        data.serviceName = Title
        data.servicePrice = Price
        data.serviceId = id
        data.status = false
        data.roll = false
        axios.post('https://ghastly-warlock-95280.herokuapp.com/addOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    swal("Good job!", "SuccessFully Confirm your order!", "success");
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
                                <h3 className="text-2xl font-bold text-center leading-6 text-indigo-900 ">Your Service</h3>
                                <div className="h-1 w-20 bg-indigo-700 mx-auto mt-3"></div>
                                <p className="mt-1 text-sm text-gray-600 mx-3">

                                    <div className="space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-102 box-border rounded-xl my-8">
                                        <img className="w-full" src={Image} alt={Title} />
                                        <div className="space-y-3 p-4 divide-y divide-indigo-200 ">
                                            <h1 className="text-gray-600 poppins text-xl">{Title}</h1>

                                            <p className="text-gray-500 pt-2 ">{Description}</p>

                                            <div className="flex justify-between pt-3">


                                                <h3 style={{ color: `${btnColor}` }}>$ {Price}</h3>
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
                                            <div className="col-span-6 ">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Full name
                                                </label>
                                                <input {...register("name", { required: true })}
                                                    type="text"
                                                    defaultValue={user.displayName}
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>



                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={user.email}
                                                    {...register("email", { required: true })}
                                                    className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("phone", { required: true })}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Gender
                                                </label>
                                                <select
                                                    {...register("gender", { required: true })}
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="female">female</option>
                                                    <option value="male">male</option>
                                                    <option value="other">other</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("address", { required: true })}
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
                                                    {...register("fromDate", { required: true })}
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
                                                    {...register("toDate", { required: true })}
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
                                        >Proceed to payment</button>
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

export default BookNowPage;