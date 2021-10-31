import React from 'react';
import useAuth from '../../Hooks/useAuth'
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import logo from '../../asserts/logo-color.png'
import Header from '../../Components/Header/Header';


const Login = () => {
    const { signInUsingGoogle, setIsLoading, setUser, setError } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'

    const handleGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user)
                setError('')
                history.push(redirect_uri)
                swal("Good job!", "LogIn Account Successfully!", "success");
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Header />
            <div className="">

                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src={logo}
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Sign in to your account</h2>

                        </div>


                        <hr />
                        <button
                            onClick={handleGoogle}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border-blue-500 border-transparent text-sm font-medium rounded-full border  text-black"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <FcGoogle className="h-5 w-5 " aria-hidden="true" />
                            </span>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;