import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Root from "../Layout/Root";
import SignUp from "../components/SignUp/SignUp";
import AllPets from "../components/AllPets/AllPets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allpets",
        element: <AllPets></AllPets>,
        loader: () => fetch("/pets.json"),
      },
    ],
  },
]);

export default router;
