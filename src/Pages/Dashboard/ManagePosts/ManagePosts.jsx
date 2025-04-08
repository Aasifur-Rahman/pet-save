import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdDoNotDisturbOn } from "react-icons/md";
import Swal from "sweetalert2";

const ManagePosts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: pendingLostPets } = useQuery({
    queryKey: ["pendingLostPets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pending/lostpets");
      return res.data;
    },
  });

  const { data: pendingFosterPets } = useQuery({
    queryKey: ["pendingFosterPets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pending/fosterpets");
      return res.data;
    },
  });

  const handleLostApprove = async (lostPetId) => {
    try {
      const confirmApproval = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve it!",
      });

      if (confirmApproval.isConfirmed) {
        const res = await axiosSecure.patch(`/lostPets/${lostPetId}`);
        if (res.data && res.data.result) {
          const { result } = res.data;
          if (result.modifiedCount > 0) {
            Swal.fire({
              title: "Approved!",
              text: "Lost Post is Approved.",
              icon: "success",
            });
          }
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to approve the lost post.",
            icon: "error",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to approve the lost post.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mt-14">
      <h1 className="text-3xl text-center mb-5">Pending Posts</h1>
      <div className="grid lg:grid-cols-2   justify-center gap-10 xl:max-w-screen-2xl md:max-w-screen-xl max-w-screen-lg  mx-auto">
        <div className="w-full border rounded-lg h-full ">
          <h3 className="text-xl text-center mb-5 mt-4">
            Foster Pending Posts
          </h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Pet Name</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {pendingFosterPets?.map((forsterPet) => (
                  <tr key={forsterPet._id} className="hover">
                    <th>{forsterPet.petsName}</th>
                    <td>{forsterPet.location}</td>
                    <td>{forsterPet.email}</td>
                    <td>
                      <button>
                        <IoCheckmarkCircleSharp className="font-bold text-xl" />
                      </button>
                    </td>
                    <td>
                      <button>
                        <MdDoNotDisturbOn className="font-bold text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full border rounded-lg h-full">
          <h3 className="text-xl text-center mb-5 mt-4">Lost Pending Posts</h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Pet Name</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {pendingLostPets?.map((lostPet) => (
                  <tr key={lostPet._id} className="hover">
                    {console.log(lostPet._id)}
                    <th>{lostPet.petName}</th>
                    <td>{lostPet.address}</td>
                    <td>{lostPet.email}</td>
                    <td>
                      <button
                        onClick={() => handleLostApprove(`${lostPet._id}`)}
                      >
                        {" "}
                        <IoCheckmarkCircleSharp className="font-bold text-xl" />
                      </button>
                    </td>
                    <td>
                      <button>
                        <MdDoNotDisturbOn className="font-bold text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePosts;
