import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// const veriable = async() => {
//   const res = await fetch('http://localhost:8000/coffee');
//   const data = await res.json();
//   return data;
// }
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:8000/coffee"),
    // loader: veriable
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:8000/coffee/${params.id}`),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:8000/users')
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
