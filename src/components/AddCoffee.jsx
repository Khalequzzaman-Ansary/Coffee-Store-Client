import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const addCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo_url }
        console.log(newCoffee);
        /* Send data to the server */
        fetch(`http://localhost:5000/coffee`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged = true) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} added successfully`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className='p-20 bg-[#F4F3F0]'>
            <h3 className='text-3xl font-bold text-center text-blue-500'>Welcome to Add Coffee Page!</h3>
            <Link to={'/'} className="btn justify-center btn-sm btn-outline btn-secondary">Home</Link>
            <form action="" onSubmit={handleAddCoffee}>
                {/* Name and Quantity Row Starts */}
                <div className='md:flex pt-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl text-black">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl text-black">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Enter Coffee Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Name and Quantity Row Ends */}
                {/* --------------------------- */}
                {/* Supplier and Taste row starts */}
                <div className='md:flex pt-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl text-black">Supplier's Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Enter Supplier's Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl text-black">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="How does it taste?" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Supplier and Taste row Ends */}
                {/* --------------- */}
                {/* Category and Details row Starts */}
                <div className='md:flex pt-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl text-black">Coffee Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl text-black">Coffee Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Category and Details Row Ends */}
                {/* ------------------------------ */}
                {/* Photo URL row starts */}
                <div className='pt-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl text-black">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo_url' placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo URL row ends */}
                <div className='pt-5'>
                    <input className="btn btn-success text-white w-full" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default addCoffee;