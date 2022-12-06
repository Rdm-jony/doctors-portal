import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { data: specialities, isLoading } = useQuery({
        queryKey: ["speciality"],
        queryFn: () => fetch("https://doctor-portal-server-alpha.vercel.app/speciality")
            .then(res => res.json())
    })
    const handleAddDoctor = (data) => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        fetch('https://api.imgbb.com/1/upload?key=3d7369d8711aba6986c8676678185a4a', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                const image = result.data.display_url
                const docotorsInfo = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: image
                }

                fetch("https://doctor-portal-server-alpha.vercel.app/doctors", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(docotorsInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success(`Dr ${docotorsInfo.name} successfully added`)
                        }
                    })
                    .catch(er => console.log(er))
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p>Add a doctor</p>
            <div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="name" {...register("name", {
                            required: true
                        })} className="input input-bordered w-full" />
                        {errors.name && errors.name.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full" />
                        {errors.email && errors.email.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <select {...register("speciality", {
                            required: true
                        })} className="select select-bordered w-full">

                            {
                                specialities.map(speciality => <option value={speciality.name}>{speciality.name}</option>)
                            }
                        </select>
                        {errors.speciality && errors.speciality.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" {...register("image", {
                            required: true
                        })} className="input input-bordered w-full" />
                        {errors.image && errors.image.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    </div>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;