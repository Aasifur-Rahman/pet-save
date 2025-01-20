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
      console.log(res.data.fosterPost);
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
                <th>Job</th>
                <th>Breed</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {fosterPosts.map((fosterPost, index) => {
                <tr key={fosterPost._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={fosterPost.images}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <td>pending</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingFosterHome;
