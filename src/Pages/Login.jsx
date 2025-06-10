import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useLocation, Link } from 'react-router';
import { AuthDataContext } from '../contexts/AuthDataContext';

const Login = () => {
    const { loginUser, signInWithGoogle } = use(AuthDataContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            setError('All fields are required');
            return;
        }

        loginUser(email, password)
            .then((result) => {
                setError('');
                console.log('logged in', result);
                navigate(location?.state || '/');
            })
            .catch((error) => console.log(error));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setError('');
                console.log(res.user);
                navigate(location?.state || '/');
            })
            .catch((err) => console.log(err));
    };

    // const handleForgetClick = () => {
    //     const email = emailRef.current.value;
    //     navigate('/forget-pass', { state: { email } });
    // };

    return (
        <div className="flex justify-center">
            <title>Login</title>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl my-10">
                <h2 className="text-primary font-semibold text-xl pt-6 mx-6 text-center">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset px-3">
                        <label className="label font-medium text-sm">Email</label>
                        <input
                            type="email"
                            // ref={emailRef}
                            className="input w-full text-xs"
                            placeholder="Enter your email address"
                            name="email"
                        />
                        <label className="label font-medium text-sm">Password</label>
                        <input
                            type="password"
                            className="input w-full text-xs"
                            placeholder="Enter your password"
                            name="password"
                        />
                        <div>
                            <button
                                type="button"
                                // onClick={handleForgetClick}
                                className="link link-hover font-medium text-sm text-accent"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 hover:btn-accent hover:text-white duration-300">
                            Login
                        </button>
                        {error && <p className="text-red-600 mt-1 font-medium text-sm">{error}</p>}
                    </form>
                    <div className="flex items-center justify-center mb-1">
                        <div className="border-t border-gray-300 flex-grow border-1"></div>
                        <span className="mx-4 text-gray-500">or</span>
                        <div className="border-t border-gray-300 flex-grow border-1"></div>
                    </div>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn bg-white text-accent border-[#e5e5e5] border-2 "
                    >
                        <FcGoogle size={18} />
                        Login with Google
                    </button>
                    <p className="pt-1 text-sm text-accent font-medium">
                        Don’t Have An Account?{' '}
                        <Link to="/register" state={location.state} className="text-info hover:underline cursor-pointer">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
