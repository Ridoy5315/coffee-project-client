import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
     const {signInUser} = useContext(AuthContext);
     const handleSignIn = e => {
          e.preventDefault();

          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;

          signInUser(email, password)
          .then(res => {
               console.log(res.user);
               const lastSignInTime = res?.user?.metadata?.lastSignInTime;
               const logInInfo = {email, lastSignInTime};

               fetch('http://localhost:8000/users', {
                    method: 'PATCH',
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(logInInfo)
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
               })
          })
          .catch(err => {
               console.log('ERROR:', err)
          })

     }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
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
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
