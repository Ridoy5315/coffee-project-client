import { Link, useLoaderData } from "react-router-dom";

import "./App.css";
import CoffeeCard from "./Components/coffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const[coffees, setCoffees] = useState(loadedCoffee);

  return (
    <>
    <header>
      <button className="bg-orange-500 text-white btn"><Link to='/addCoffee'>Add Coffee</Link></button>
      <button className="bg-orange-500 text-white btn"><Link to='/signin'>Sign In</Link></button>
      <button className="bg-orange-500 text-white btn"><Link to='/signup'>Sign Up</Link></button>
      <button className="bg-orange-500 text-white btn"><Link to='/users'>Users</Link></button>
    </header>
      <h1 className="text-5xl text-purple-600">Hot Coffee</h1>

      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees} setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
