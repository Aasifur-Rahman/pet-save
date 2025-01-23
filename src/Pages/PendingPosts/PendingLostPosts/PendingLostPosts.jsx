import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NavBar from "../../../Shared/NavBar";

const PendingLostPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: lostPets } = useQuery({
    queryKey: ["lostPets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/lostPost/${user.email}`);
      return res.data;
    },
  });

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
                <th>Name</th>
                <th>Category</th>
                <th>Age</th>
                <th>Breed</th>
                <th>Status</th>
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
                            <div className="font-bold">{lostPet.petsName}</div>
                            <div className="text-sm opacity-50">
                              {lostPet.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {lostPet.category}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          from: {lostPet.email}
                        </span>
                      </td>
                      <td>{lostPet.petAge}</td>
                      <td>{lostPet.breedType}</td>
                      <td
                        className={`${
                          lostPet.status === "pending"
                            ? "text-yellow-500"
                            : lostPet.status === "rejected"
                            ? "text-red-500"
                            : lostPet.status === "approved"
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {lostPet.status}
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">Delete</button>
                      </th>
                    </tr>
                  ))}
                </>
              ) : (
                <p>No results found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingLostPosts;
