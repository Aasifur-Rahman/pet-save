import { useQuery } from "@tanstack/react-query";
import NavBar from "../../../Shared/NavBar";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import Modal from "../../../components/Modal/Modal";

const PendingFosterHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: fosterPosts = [], refetch } = useQuery({
    queryKey: ["fosterPosts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/fosterPost/${user.email}`);
      return res.data;
    },
  });

  const handleDeletePost = (fosterPost) => {
    console.log(fosterPost);
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
        axiosSecure.delete(`/user/fosterPost/${fosterPost}`).then((res) => {
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
                <th>Breed</th>
                <th>Status</th>
                <th>Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {fosterPosts ? (
                <>
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
                            <div className="font-bold">
                              {fosterPost.petsName}
                            </div>
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

                      <td>{fosterPost.breedType}</td>
                      <td
                        className={`${
                          fosterPost.status === "pending"
                            ? "text-yellow-500 capitalize"
                            : fosterPost.status === "rejected"
                            ? "text-red-500 capitalize"
                            : fosterPost.status === "approved"
                            ? "text-green-500 capitalize"
                            : ""
                        }`}
                      >
                        {fosterPost.status}
                      </td>
                      <th>
                        <Modal
                          photo={fosterPost.image}
                          name={fosterPost.petsName}
                          location={fosterPost.location}
                          category={fosterPost.category}
                          breed={fosterPost.breedType}
                          age={fosterPost.petAge}
                          medicalNotes={fosterPost.medicalNotes}
                          description={fosterPost.description}
                          nature={fosterPost.petsNature}
                          friendly={fosterPost.friendly}
                          childFriendly={fosterPost.childFriendly}
                          catFriendly={fosterPost.catFriendly}
                          pottyTrained={fosterPost.pottyTrained}
                        ></Modal>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeletePost(`${fosterPost._id}`)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
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

export default PendingFosterHome;
