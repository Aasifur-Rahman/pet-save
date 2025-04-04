import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdDoNotDisturbOn } from "react-icons/md";

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

  console.log(pendingFosterPets);

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
                    <th>{lostPet.petName}</th>
                    <td>{lostPet.address}</td>
                    <td>{lostPet.email}</td>
                    <td>
                      <button>
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
