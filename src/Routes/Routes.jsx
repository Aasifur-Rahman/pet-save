import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Root from "../Layout/Root";
import SignUp from "../components/SignUp/SignUp";
import AllPets from "../components/AllPets/AllPets";
import Pets from "../components/AllPets/Pets/Pets";

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
      },

      {
        path: "/pets/:id",
        element: <Pets></Pets>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pets/${params.id}`),
      },
    ],
  },
]);

export default router;
