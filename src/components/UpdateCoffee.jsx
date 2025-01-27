import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo_url } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;
        const UpdatedCoffee = { name, quantity, supplier, taste, category, details, photo_url }
        console.log(UpdatedCoffee);
        /* Send data to the server */
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} updated successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    navigate('/');
                }
            })
    }
    return (
        <div>
            <div className='p-20 bg-[#F4F3F0]'>
                <h3 className='text-3xl font-bold text-center text-blue-500'>Update Coffee: {name}</h3>
                <form action="" onSubmit={handleUpdateCoffee}>
                    {/* Name and Quantity Row Starts */}
                    <div className='md:flex pt-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-black">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl text-black">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered w-full" />
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
                                <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl text-black">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='taste' defaultValue={taste} className="input input-bordered w-full" />
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
                                <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl text-black">Coffee Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' defaultValue={details} className="input input-bordered w-full" />
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
                                <input type="text" name='photo_url' defaultValue={photo_url} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Photo URL row ends */}
                    <div className='pt-5'>
                        <input className="btn btn-success text-white w-full" type="submit" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;