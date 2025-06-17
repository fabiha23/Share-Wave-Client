import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from 'firebase/auth';
import { use, useState } from 'react';
import { AuthDataContext } from '../contexts/AuthDataContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {

    const { registerUser, signInWithGoogle, auth, setUser, user } = use(AuthDataContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const location = useLocation()

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { password, ...userProfile } = Object.fromEntries(formData.entries())

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!userProfile.name || !userProfile.photo || !userProfile.email || !password) {
            setError('All fields are required');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }
        if (user?.email === userProfile?.email) {
            setError('You have already created an account')
        }

        registerUser(userProfile.email, password, userProfile.name, userProfile.photo)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: 'Account Created!',
                    icon: 'success',
                    timer: 3000,
                    confirmButtonColor: '#10B981'
                })
                navigate(location?.state || '/')
                setError('')
                const profile = {
                    displayName: userProfile.name,
                    photoURL: userProfile.photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        setUser({
                            ...res.user, displayName: userProfile.name,
                            photoURL: userProfile.photo
                        })
                        //add user to db

                        axios.post(`${import.meta.env.VITE_API_URL}/users`, userProfile)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(res => {
                setError('')
                console.log(res.user)
                const userProfile = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photo: res.user.photoURL
                };
                Swal.fire({
                    title: 'Account Created!',
                    icon: 'success',
                    timer: 3000,
                    confirmButtonColor: '#10B981'
                })
                navigate(location?.state || '/')
                axios.post(`${import.meta.env.VITE_API_URL}/users`, userProfile)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex justify-center items-center min-h-screen px-4 bg-primary'>
            <title>Register | ShareWave</title>
            <div className="card bg-slate-900 text-white w-full max-w-sm shadow-info ring-offset-1 ring-offset-info shadow-[0_0_15px] hover:shadow-[0_0_20px] transition duration-300">
                <h2 className='text-neutral font-semibold text-xl pt-6 mx-6 text-center opacity-80'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset px-3 pb-0">
                        {/* name */}
                        <label className="label font-medium text-sm">Your Name</label>
                        <input name='name' type="text" className="input input-bordered w-full text-xs bg-primary text- border-accent focus:ring-2 focus:ring-neutral" placeholder="Enter you name" />
                        {/* photo */}
                        <label className="label font-medium text-sm">Photo-URL</label>
                        <input name='photo' type="text" className="input input-bordered w-full text-xs bg-primary text- border-accent focus:ring-2 focus:ring-neutral" placeholder="https://example.com/image.jpg" />
                        {/* email */}
                        <label className="label font-medium text-sm">Email</label>
                        <input name='email' type="email" className="input input-bordered w-full text-xs bg-primary text- border-accent focus:ring-2 focus:ring-neutral" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="label font-medium text-sm">Password</label>
                        <input name='password' type="password" className="input input-bordered w-full text-xs bg-primary text- border-accent focus:ring-2 focus:ring-neutral" placeholder="Enter your password" />

                        <button type='submit' className="mt-1 py-2.5 text-sm rounded-sm font-medium bg-primary border-info border-1 cursor-pointer text-neutral hover:bg-gray-400 hover:text-primary duration-200">Register</button>
                        <p>
                            {
                                error && <span className='text-error font-medium text-sm flex items-center gap-1'>
                                    {error}</span>
                            }
                        </p>
                    </form>

                    <div className="flex items-center justify-center mb-1">
                        <div className="border-t border-gray-500 flex-grow"></div>
                        <span className="mx-4 text-gray-400">or</span>
                        <div className="border-t border-gray-500 flex-grow"></div>
                    </div>
                    <button onClick={handleGoogleSignUp} className="py-2.5 text-sm rounded-sm font-medium bg-primary border-info border-1 cursor-pointer text-neutral hover:bg-gray-400 hover:text-primary duration-200 flex justify-center gap-2 mx-3">
                        <FcGoogle size={18} />
                        Sign Up with Google
                    </button>
                    <p className='pt-1 text-sm text-neutral font-medium mx-3'><span>Already Have an Account ? </span><Link to='/login' className='text-info hover:underline cursor-pointer'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;