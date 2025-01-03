import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import SignUp from "../Pages/SignUp/SignUp";
import AllPets from "../Pages/AllPets/AllPets";
import Pets from "../Pages/AllPets/Pets/Pets";
import LostPet from "../Pages/AllPets/LostPet/LostPet";
import FosteringHome from "../Pages/AllPets/FosteringHome/FosteringHome";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/lostpet",
        element: (
          <PrivateRoute>
            <LostPet></LostPet>
          </PrivateRoute>
        ),
      },
      {
        path: "/fosteringHome",
        element: (
          <PrivateRoute>
            <FosteringHome></FosteringHome>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
