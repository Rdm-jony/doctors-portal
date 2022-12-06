import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useToken from '../useToken/useToken';


const SignIn = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [email, setEmail] = useState("")
    const [token] = useToken(email)
    const navigate = useNavigate()
    if (token) {
        navigate(from, { replace: true })
    }

    const { signInWithEmail } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const handleSignIn = data => {
        const { email, password } = data;
        signInWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                setEmail(result.user.email)
                console.log(result.user.email)

            })
            .catch(er => console.log(er))
    }
    return (
        <div className='w-96' >
            <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password")} className="input input-bordered w-full" />
                    <p className='text-xs'>Forgot Password ?</p>
                </div>
                <button className='btn btn-accent w-full my-2' type="submit">Sign In</button>
                <p className='text-xs'>New to Doctors Portal?<Link className='text-secondary font-semibold' to="../sign-up">Create new account</Link></p>
            </form>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full my-2' type="submit">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignIn;