import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useToken from '../useToken/useToken';


const SignUp = () => {
    const { signUpWithEmail, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [email, setEmail] = useState("")
    const [token] = useToken(email)

    if (token) {
        navigate("/")
    }


    const handleSignUp = data => {
        const { email, password, name } = data;
        console.log(data)
        signUpWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                const profile = {
                    displayName: name
                }
                upDateName(profile, email)
            })
            .catch(er => console.log(er))
    }

    const upDateName = (profile, email) => {
        updateUser(profile)
            .then(() => {
                saveUser(profile.displayName, email)
            })
            .catch(er => console.log(er))
    }

    const saveUser = (name, email) => {
        const user = {
            name,
            email
        }
        fetch("https://doctor-portal-server-alpha.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEmail(email)
            })
            .catch(er => console.log(er))
    }
    return (
        <div className='w-96 mx-auto my-10 p-5 shadow-xl rounded-lg'>
            <h2 className='text-center font-semibold'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", {
                        required: true, maxLength: 30
                    })} className="input input-bordered w-full" />
                    {errors.name && errors.name.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}

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
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* )/i
                    })} className="input input-bordered w-full" />
                    {errors.password && errors.password.type === "required" && <span className='text-sm text-red-600'>This is required</span>}
                    {errors.password && errors.password.type === "minLength" && <span className='text-sm text-red-600'>password should be 8 charcter long</span>}
                    {errors.password && errors.password.type === "pattern" && <span className='text-sm text-red-600'>Must conatains at least one uppercase letter,one number and one special character</span>}
                </div>
                <button className='btn btn-accent w-full my-2' type="submit">Sign Up</button>
                <p className='text-xs'>Alredy have an account?<Link className='text-secondary font-semibold' to="../sign-in">Log in</Link></p>
            </form>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full my-2' type="submit">CONTINUE WITH GOOGLE</button>

        </div>
    );
};

export default SignUp;