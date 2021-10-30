import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Heading from '../From/Heading';
import swal from 'sweetalert';

const AddWhyUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const url = 'http://localhost:5000/addwhyUs'
    const onSubmit = data => {
      axios.post(url, data)
        .then((res) => {
          if (res.data.insertedId) {
            swal('Service added successfully')
            reset()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };


    return (
        <>
            <Heading text="Add Why Us"></Heading>

            
            <div className="container mx-auto py-52 " >
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col">

                    <input {...register("Title", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Title" />
                    {errors.Title?.type === 'required' && "Title is required"}


                    <textarea {...register("Description", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Description" />
                    {errors.Description?.type === 'required' && "Description is required"}

                    <input {...register("Image", { required: true })} className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-pink-400 focus:ring-4" placeholder="Image" type="text" />

                    {errors.Image && <span>This field is required</span>}

                    <input type="submit" className="w-3/6 mx-auto my-5 p-3 rounded-lg shadow-lg bg-pink-500 text-blue-100 text-xl font-semibold hover:bg-pink-600 hover:text-white delay-100 ease-linear transition-all" />
                </form>
            </div >
        </>
    );
};

export default AddWhyUs;