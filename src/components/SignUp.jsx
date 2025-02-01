import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        console.log('Sign Up Form');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('User created at FireBase', user)
                const createdAt = user.metadata?.creationTime;
                console.log(createdAt);
                const newUser = { name, email, createdAt }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('User created at Database', data)
                        if (data.acknowledged = true) {
                            Swal.fire({
                                title: 'Success!',
                                text: `New user ${name} added successfully`,
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                            form.reset();
                        }
                    })
            })
            .catch(error => {
                console.log('error', error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='font-bold text-center text-2xl py-4'>Please Sign Up Here!</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Set password" className="input input-bordered" />
                            <label className="label">
                                <a href="/signIn" className="label-text-alt link link-hover">Already have an account? click here!</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;