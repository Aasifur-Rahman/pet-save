import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";

import LostPetDetails from "../../../components/LostPetDetails/LostPetDetails";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const UserLostPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: lostPets, refetch } = useQuery({
    queryKey: ["lostPets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/lostPost/${user.email}`);
      return res.data;
    },
  });

  const handleDeletePost = async (lostPost) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // Deleting pet data
        const pet = lostPost;
        const petRes = await axiosSecure.delete(`/pet/${pet._id}`);

        // Deleting lost post data after pet deletion
        const lostRes = await axiosSecure.delete(
          `/user/lostPost/${lostPost._id}`
        );

        // Check if both delete operations were successful
        if (lostRes.data.deletedCount && petRes.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      // Handle any error that occurs during the request
      console.error("Error deleting posts:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-10">
        <div>
          <h3 className="text-5xl text-center font-bold font-mono mb-10">
            {user.name}Lost Posts
          </h3>
        </div>

        <div className="lg:overflow-x-auto md:overflow-x  overflow-x-hidden">
          <table className="table items-center ">
            {/* head */}
            <thead>
              <tr>
                <th className="hidden md:table-cell">Numbers</th>
                <th>{"Pet"} Name</th>
                <th className="hidden md:table-cell">{"Parent Name"}</th>
                <th className="hidden md:table-cell ">Address</th>
                <th>Edit</th>
                <th>Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {lostPets ? (
                <>
                  {lostPets.map((lostPet, index) => (
                    <tr key={lostPet._id}>
                      <td className="hidden md:table-cell ">{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={lostPet.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{lostPet.petName}</div>
                            <div className="text-sm opacity-50">
                              {lostPet.typeofBreed}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell ">
                        {lostPet?.firstName} {lostPet?.lastName}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          from: {lostPet.email}
                        </span>
                      </td>

                      <td className="hidden md:table-cell ">
                        {lostPet.address}
                      </td>

                      <th>
                        <Link to={`/user/lostPet/${lostPet._id}`}>
                          <FaEdit></FaEdit>
                        </Link>
                      </th>
                      <th>
                        <LostPetDetails
                          id={lostPet._id}
                          parentName={
                            lostPet.firstName + " " + lostPet.lastName
                          }
                          photo={lostPet.image}
                          category={lostPet.category}
                          address={lostPet.address}
                          petName={lostPet.petName}
                          typeofBreed={lostPet.typeofBreed}
                          reward={lostPet?.reward}
                          age={lostPet.petAge}
                          lastSeen={lostPet.lastSeen}
                          typeofPet={lostPet.typeofPet}
                          nature={lostPet.petNature}
                          vaccinated={lostPet.vaccinated}
                          resToName={lostPet.respondsToName}
                        ></LostPetDetails>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeletePost(lostPet)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {" "}
                  <span className="text-center mt-10">No results found</span>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserLostPosts;
