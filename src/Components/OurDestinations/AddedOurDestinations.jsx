import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Heading from '../From/Heading';
import swal from 'sweetalert';
import { AiOutlineDelete } from 'react-icons/ai';

const AddedOurDestinations = () => {
    const [services, setServices] = useState([])
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const url = 'http://localhost:5000/ourDestination'
    const onSubmit = data => {
        axios.post(url, data)
            .then((res) => {
                if (res.data.insertedId) {
                    reset()
                    swal("Good job!", "Feedback Added successfully!", "success");
                    axios.get('http://localhost:5000/destination')
                        .then(res => {
                            setServices(res.data)
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/destination')
            .then(res => {
                setServices(res.data)
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
                axios.delete(`http://localhost:5000/destination/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            swal("Good job!", "deleted successfully!", "success");
                            const remainingUsers = services.filter(user => user._id !== id);
                            setServices(remainingUsers);
                        }
                    })
            })
    }
    return (
        <>

            <Heading text="Added New Service"></Heading>

            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">

                    <div className="mt-5 md:mt-0 md:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col">

                            <input {...register("title", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Title" />
                            {errors.Title?.type === 'required' && "Title is required"}

                            <input {...register("tag", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Tag" />
                            {errors.Title?.type === 'required' && "Title is required"}


                           

                            <input {...register("rating", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Rating"  />

                            <input {...register("ratUsers", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Total Rat Users" type="number" />


                            <select {...register("btnColor", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Price">
                                
                                <option value="#f76570" selected>Red</option>
                                <option value="#ba71da">Blue</option>
                                <option value="#14b9d5">Green</option>
                            </select>

                            <input {...register("img", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Image Url" type="text" />

                            {errors.Image && <span>This field is required</span>}

                            <input type="submit" className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg bg-pink-500 text-blue-100 text-xl font-semibold hover:bg-pink-600 cursor-pointer hover:text-white delay-100 ease-linear transition-all" />
                        </form>
                    </div>
                </div>
            </div>







            <div className="flex flex-col m-10">
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
                                            Title
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            btnColor
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {services.map((service) => (
                                        <tr key={service.email}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={service.img} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{service.title}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {service.btnColor}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.tag}</td>
                                            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">


                                                <AiOutlineDelete onClick={() => handleDelete(service._id)} className="text-red-600  font-extrabold text-2xl hover:text-red-900 ml-3 cursor-pointer" />


                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
















        </>
    );
};

export default AddedOurDestinations;