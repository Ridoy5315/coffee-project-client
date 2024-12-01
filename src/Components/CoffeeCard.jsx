import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
               console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="hero bg-base-200">
      <div className=" flex p-4">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex justify-between gap-8">
          <div className="">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p>{quantity}</p>
            <p className="py-6">{details}</p>
          </div>
          <div>
            <div className="join join-vertical space-y-3">
              <button className="btn bg-slate-500 text-white">view</button>
              <Link to={`updateCoffee/${_id}`} className="btn bg-slate-500 text-white">edit</Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-slate-500 text-white"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {};

export default CoffeeCard;
