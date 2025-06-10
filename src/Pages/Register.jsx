import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from 'firebase/auth';
import { use, useState } from 'react';
import { AuthDataContext } from '../contexts/AuthDataContext';

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
        if(user.email === userProfile.email){
            setError('You have already created an account')
        }

        registerUser(userProfile.email, password, userProfile.name, userProfile.photo)
            .then(res => {
                console.log(res.user)
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
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userProfile)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
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
                navigate(location?.state || '/')
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex justify-center'>
            <title>Register | ShareWave</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
                <h2 className='text-primary font-semibold text-xl pt-6 mx-6 text-center'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset px-3 space-y-1">
                        {/* name */}
                        <label className="label font-medium text-sm">Your Name</label>
                        <input name='name' type="text" className="input w-full text-sm focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="Enter you name" />
                        {/* photo */}
                        <label className="label font-medium text-sm">Photo-URL</label>
                        <input name='photo' type="text" className="input w-full text-sm focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="https://example.com/image.jpg" />
                        {/* email */}
                        <label className="label font-medium text-sm">Email</label>
                        <input name='email' type="email" className="input w-full text-sm focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="label font-medium text-sm">Password</label>
                        <input name='password' type="password" className="input w-full text-sm focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="Enter your password" />

                        <button type='submit' className="btn btn-primary mt-1 hover:btn-accent hover:text-white duration-300">Register</button>
                        <p>
                            {
                                error && <span className='text-red-600 font-medium text-sm flex items-center gap-1'>
                                    {error}</span>
                            }
                        </p>
                    </form>

                    <div className="flex items-center justify-center mb-1">
                        <div className="border-t border-gray-300 flex-grow border-1"></div>
                        <span className="mx-4 text-gray-500">or</span>
                        <div className="border-t border-gray-300 flex-grow border-1"></div>
                    </div>
                    <button onClick={handleGoogleSignUp} className="btn bg-white text-accent border-[#e5e5e5] border-2">
                        <FcGoogle size={18} />
                        Sign Up with Google
                    </button>
                    <p className='pt-1 text-sm text-accent font-medium'>Already Have an Account ? <Link to='/login' className='text-info hover:underline cursor-pointer hover:text-primary duration-200'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;