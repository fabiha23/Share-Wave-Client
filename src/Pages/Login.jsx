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
            .catch((error) => {
                console.log(error);
                if(error.message==='Firebase: Error (auth/invalid-credential).'){
                    setError('Invalid email or password')
                }
            });
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
        <div className="flex justify-center items-center min-h-screen px-4 bg-primary">
            <title>Login | ShareWave</title>
            <div className="card bg-slate-900 text-white w-full max-w-sm shadow-info ring-offset-1 ring-offset-info shadow-[0_0_15px] hover:shadow-[0_0_20px] transition duration-300">
                <h2 className="text-neutral font-semibold text-xl pt-6 mx-6 text-center opacity-80">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset px-3">
                        <label className="label font-medium text-sm">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full text-xs bg-primary text- border-accent focus:ring-2 focus:ring-neutral"
                            placeholder="Enter your email address"
                            name="email"
                        />
                        <label className="label font-medium text-sm">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full text-xs bg-slate-800 text-white border-accent focus:ring-2 focus:ring-neutral"
                            placeholder="Enter your password"
                            name="password"
                        />
                        <div>
                            <button
                                type="button"
                                className="link link-hover font-medium text-xs opacity-70  text-neutral"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <button type="submit" className=" mt-3 py-2.5 text-sm rounded-sm font-medium bg-primary border-info border-1 cursor-pointer text-neutral hover:bg-gray-400 hover:text-primary duration-200">
                            Login
                        </button>
                        {error && <p className="text-error mt-1 font-medium text-sm">{error}</p>}
                    </form>
                    <div className="flex items-center justify-center mb-1">
                        <div className="border-t border-gray-500 flex-grow"></div>
                        <span className="mx-4 text-gray-400">or</span>
                        <div className="border-t border-gray-500 flex-grow"></div>
                    </div>
                    <button
                        onClick={handleGoogleLogin}
                        className="py-2.5 text-sm rounded-sm font-medium bg-primary border-info border-1 cursor-pointer text-neutral hover:bg-gray-400 hover:text-primary duration-200 flex justify-center gap-2 mx-3"
                    >
                        <FcGoogle size={18} />
                        Login with Google
                    </button>
                    <p className="pt-1 text-sm text-neutral font-medium mx-3">
                        <span className='opacity-70'>Don’t Have An Account ? </span>
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
