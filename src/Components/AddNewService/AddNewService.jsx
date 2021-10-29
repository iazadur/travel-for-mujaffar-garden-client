import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Heading from '../From/Heading';
import swal from 'sweetalert';

const AddNewService = () => {
    const img = [
        "https://i.ibb.co/MNMdMc6/Boat.png",
        "https://i.ibb.co/B2pPsCn/supper-delux-seminar.png",
        "https://i.ibb.co/s2qNjMY/zoo1.png",
        "https://i.ibb.co/VNb84Fd/Vip-12.png",
        "https://i.ibb.co/R4QCmz0/why-moon-11.png"
    ]
    console.log(img);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const url = 'http://localhost:5000/addService'
    const onSubmit = data => {
        console.log(data);
        axios.post(url, data)
            .then((res) => {
                if (res.data.insertedId) {
                    reset(res.data)
                    swal("New Services Added Successfully!")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

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
















        </>
    );
};

export default AddNewService;