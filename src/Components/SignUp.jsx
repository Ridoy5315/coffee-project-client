import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = (props) => {

     const {createUser} = useContext(AuthContext);

     const handleSignUp = (e) =>{
          e.preventDefault();

          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;

          createUser(email, password)
          .then(res => {
               console.log(res.user);
               const createdAt = res?.user?.metadata?.creationTime;
               const newUser = {name, email, createdAt}
               //save new data info in database
               fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
               })
               .then(res => res.json())
               .then(data => {
                    if(data.insertedId){
                         console.log('user created in db')
                    }
               })
               form.reset();
          })
          .catch(err =>  {
               console.log('ERROR:', err)
          })

     }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
