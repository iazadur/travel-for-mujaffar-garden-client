import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Heading from '../From/Heading';
import swal from 'sweetalert';
import { AiOutlineDelete } from 'react-icons/ai';

const AddNewService = () => {
    const [services, setServices] = useState([])
    const img = [
        "",
        "https://i.ibb.co/B2pPsCn/supper-delux-seminar.png",
        "",
        "https://i.ibb.co/VNb84Fd/Vip-12.png",
        "https://i.ibb.co/R4QCmz0/why-moon-11.png"
    ]
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const url = 'http://localhost:5000/addService'
    const onSubmit = data => {
        axios.post(url, data)
            .then((res) => {
                if (res.data.insertedId) {
                    reset()
                    swal("Good job!", "deleted successfully!", "success");
                    axios.get('http://localhost:5000/services')
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
        axios.get('http://localhost:5000/services')
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
                axios.delete(`http://localhost:5000/deleteService/${id}`)
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

            <Heading text="Add New Service"></Heading>

            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">

                    <div className="mt-5 md:mt-0 md:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col">

                            <input {...register("Title", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Title" />
                            {errors.Title?.type === 'required' && "Title is required"}


                            <textarea {...register("Description", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Description" />
                            {errors.Description?.type === 'required' && "Description is required"}

                            <input {...register("Price", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Price" type="number" />


                            <select {...register("btnColor", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Price">
                                <option value="#ffd205">Yellow</option>
                                <option value="#f76570">Red</option>
                                <option value="#ba71da">Blue</option>
                                <option value="#14b9d5">Green</option>
                                <option value="#1bbc9b">Deep Green</option>
                            </select>

                            <input {...register("Image", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Image Url" type="text" />

                            {errors.Image && <span>This field is required</span>}

                            <input type="submit" className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg bg-pink-500 text-blue-100 text-xl font-semibold hover:bg-pink-600 hover:text-white delay-100 ease-linear transition-all" />
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
                                                        <img className="h-10 w-10 rounded-full" src={service.Image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                                        <div className="text-sm text-gray-500">{service.Title}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {service.btnColor}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.Price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">


                                                <AiOutlineDelete onClick={() => handleDelete(service._id)} className="text-red-600 cursor-pointer font-extrabold text-2xl hover:text-red-900 ml-3" />


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

export default AddNewService;