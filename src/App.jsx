import { useLoaderData } from "react-router-dom";

import "./App.css";
import CoffeeCard from "./Components/coffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const[coffees, setCoffees] = useState(loadedCoffee);

  return (
    <>
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
