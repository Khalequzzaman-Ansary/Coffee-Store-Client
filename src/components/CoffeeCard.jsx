import React from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo_url } = coffee;
    const navigate = useNavigate();

    const updateCoffeeRoute = () => {
        navigate(`/updateCoffee/${_id}`);
    }

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            window.location.reload(); // Refreshes the page
                        }
                    })
            }
        });
    }

    return (
        <div className="card  mt-3 card-side bg-base-100 shadow-xl">
            <figure><img src={photo_url} alt="Movie" /></figure>
            <div className="felx justify-between w-full pr-3">
                <div>
                    <p className="font-bold">{name}</p>
                    <p>{quantity}</p>
                    <p>{details}</p>
                    <p>{supplier}</p>
                </div>
                <div className="card-actions justify-end pb-3">
                    <div className="btn-group flex flex-col space-y-2">
                        <button className="btn btn-primary">View</button>
                        <button onClick={updateCoffeeRoute} className="btn btn-primary">Edit</button>
                        <button className="btn bg-red-600 text-white"
                            onClick={() => handleDelete(_id)}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;