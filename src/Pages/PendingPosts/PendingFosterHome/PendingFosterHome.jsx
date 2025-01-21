import { useQuery } from "@tanstack/react-query";
import NavBar from "../../../Shared/NavBar";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PendingFosterHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: fosterPosts = [] } = useQuery({
    queryKey: ["fosterPosts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/fosterPost/${user.email}`);
      return res.data;
    },
  });

  console.log(fosterPosts);
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
              {fosterPosts.map((fosterPost, index) => (
                <tr key={fosterPost._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={fosterPost.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{fosterPost.petsName}</div>
                        <div className="text-sm opacity-50">
                          {fosterPost.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {fosterPost.category}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      from: {fosterPost.email}
                    </span>
                  </td>
                  <td>{fosterPost.petAge}</td>
                  <td>{fosterPost.breedType}</td>
                  <td>pending</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingFosterHome;
