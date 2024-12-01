import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
const AddCoffee = props => {
     const handleAddCoffee = e => {
          e.preventDefault();

          const form = e.target;

          const name = form.name.value;
          const quantity = form.quantity.value;
          const supplier = form.supplier.value;
          const taste = form.taste.value;
          const category = form.category.value;
          const details = form.details.value;
          const photo = form.photo.value;

          const newCoffee = {name, quantity, supplier, taste, category, details, photo};

          console.log(newCoffee)

          //https://ibb.co/GQd7n2H

          fetch('http://localhost:8000/coffee', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(newCoffee)

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.insertedId){
                    Swal.fire({
                         title: 'Error!',
                         text: 'Do you want to continue',
                         icon: 'error',
                         confirmButtonText: 'Cool'
                       })
               }
               form.reset();
          })
     }
     return (
          <div className='w-10/12 mx-auto bg-[#F4F3F0] p-20'>
               <h3 className='text-3xl font-bold text-center mb-8'>Add a Coffee</h3>
               <form onSubmit={handleAddCoffee} className='flex flex-col gap-6'>
                    {/* form row-1 */}
                    <div className='flex gap-6'>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Coffee Name</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='name' placeholder='Coffee name' className='input input-bordered w-full' />
                              </label>
                         </div>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Available Quantity</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='quantity' placeholder='Available Quantity' className='input input-bordered w-full' />
                              </label>
                         </div>
                    </div>
                    {/* form row-2 */}
                    <div className='flex gap-6'>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Supplier Name</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='supplier' placeholder='Supplier Name' className='input input-bordered w-full' />
                              </label>
                         </div>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Taste</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='taste' placeholder='Taste' className='input input-bordered w-full' />
                              </label>
                         </div>
                    </div>
                    {/* form row-3 */}
                    <div className='flex gap-6'>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Category</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='category' placeholder='Category' className='input input-bordered w-full' />
                              </label>
                         </div>
                         <div className='form-control w-1/2'>
                              <label className='label'>
                                   <span className='label-text'>Details</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='details' placeholder='Details' className='input input-bordered w-full' />
                              </label>
                         </div>
                    </div>
                    {/* form row-4 */}
                    <div className=''>
                         <div className='form-control w-full'>
                              <label className='label'>
                                   <span className='label-text'>Photo URL</span>
                              </label>
                              <label className='input-group'>
                                   <input type="text" name='photo' placeholder='Photo URL' className='input input-bordered w-full' />
                              </label>
                         </div>
                         
                    </div>

                    <button className='w-full bg-slate-700 text-white py-3 rounded-lg'>ADD COFFEE</button>

               </form>
          </div>
     );
};

AddCoffee.propTypes = {
     
};

export default AddCoffee;