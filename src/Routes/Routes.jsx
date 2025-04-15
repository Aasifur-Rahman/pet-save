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
import Profile from "../Pages/Profile/Profile";
import PendingFosterHome from "../Pages/PendingPosts/PendingFosterHome/PendingFosterHome";
import PendingLostPosts from "../Pages/PendingPosts/PendingLostPosts/PendingLostPosts";

import Dogs from "../Pages/AllPets/Dogs/Dogs";
import Cats from "../Pages/AllPets/Cats/Cats";
import Others from "../Pages/AllPets/Others/Others";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "./AdminRoute";
import AddAllPets from "../Pages/Dashboard/AddAllPets/AddAllPets";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManagePets from "../Pages/Dashboard/ManagePets/ManagePets";
import UpdatePets from "../Pages/Dashboard/ManagePets/UpdatePets/UpdatePets";
import ManagePosts from "../Pages/Dashboard/ManagePosts/ManagePosts";
import About from "../Pages/About/About";
import ForgotPassword from "../utils/ForgotPassword";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/resetPassword",
        element: <ForgotPassword></ForgotPassword>,
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
        path: "/pets/dogs",
        element: <Dogs></Dogs>,
      },
      {
        path: "/pets/cats",
        element: <Cats></Cats>,
      },
      {
        path: "/pets/others",
        element: <Others></Others>,
      },

      // user related routes
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
      {
        path: "/user/pendingFosterPost",
        element: (
          <PrivateRoute>
            <PendingFosterHome></PendingFosterHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/pendingLostPost",
        element: (
          <PrivateRoute>
            <PendingLostPosts></PendingLostPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addAllPets",
        element: (
          <AdminRoute>
            <AddAllPets></AddAllPets>
          </AdminRoute>
        ),
      },
      {
        path: "managePets",
        element: (
          <AdminRoute>
            <ManagePets></ManagePets>
          </AdminRoute>
        ),
      },
      {
        path: "updatePet/:id",
        element: (
          <AdminRoute>
            <UpdatePets></UpdatePets>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pets/${params.id}`),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },

      {
        path: "managePosts",
        element: (
          <AdminRoute>
            <ManagePosts></ManagePosts>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
