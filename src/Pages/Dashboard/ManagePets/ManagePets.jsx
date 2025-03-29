import { FaEdit, FaTrash } from "react-icons/fa";
import useAllPets from "../../../hooks/useAllPets";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManagePets = () => {
  const [pets, , refetch] = useAllPets();
  const axiosSecure = useAxiosSecure();

  const handleDeletePetData = (pet) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/pet/${pet._id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Pet Name</th>
                <th>Location</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex pets-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={pet?.images?.img1}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.location}</td>
                  <th>
                    <Link to={`/dashboard/updatePet/${pet._id}`}>
                      <button className="btn btn-warning btn-xs">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeletePetData(pet)}
                      className="btn btn-error  btn-xs"
                    >
                      <FaTrash></FaTrash>
                    </button>
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

export default ManagePets;
