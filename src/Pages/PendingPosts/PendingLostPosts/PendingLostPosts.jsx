import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NavBar from "../../../Shared/NavBar";
import Swal from "sweetalert2";
import LostPetModal from "../../../components/LostPetModal/LostPetModal";

const PendingLostPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: lostPets, refetch } = useQuery({
    queryKey: ["lostPets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/lostPost/${user.email}`);
      return res.data;
    },
  });

  const handleDeletePost = (lostPostId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/lostPost/${lostPostId}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Numbers</th>
                <th>{"Pet"} Name</th>
                <th>{"Parent Name"}</th>
                <th>Address</th>
                <th>Status</th>
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
                      <td>{index + 1}</td>
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
                      <td>
                        {lostPet?.firstName} {lostPet?.lastName}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          from: {lostPet.email}
                        </span>
                      </td>

                      <td>{lostPet.address}</td>
                      <td
                        className={`${
                          lostPet.status === "pending"
                            ? "text-yellow-500 capitalize"
                            : lostPet.status === "rejected"
                            ? "text-red-500 capitalize"
                            : lostPet.status === "approved"
                            ? "text-green-500 capitalize"
                            : ""
                        }`}
                      >
                        {lostPet.status}
                      </td>
                      <th>
                        <LostPetModal
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
                        ></LostPetModal>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeletePost(`${lostPet._id}`)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </>
              ) : (
                <span className="text-center">No results found</span>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingLostPosts;
