import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ChartStats from "./ChartStats";
import { MdPending, MdPets } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import VSChart from "./VSChart";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className=" mx-auto mt-5">
      <div></div>
      <h1 className="text-2xl font-bold text-center text-primary">
        Admin Home
      </h1>
      <div className="flex justify-center mt-5">
        <div className=" stats stats-vertical  lg:stats-horizontal md:stats-horizontal text-primary  shadow">
          <div className="stat  ">
            <div className="stat-title">All Pets</div>
            <div className="stat-value flex justify-center items-center">
              {" "}
              <MdPets className="text-2xl mr-3"></MdPets> {stats?.allPets}
            </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-center">
              Pending Posts{" "}
              <MdPending className="justify-self-center mt-1 text-primary text-2xl"></MdPending>
            </div>
            <div className="stat-value ">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Foster Pets</th>
                      <th>Lost Pets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-center">
                      <td>{stats?.pendingFosterPets}</td>
                      <td>{stats?.pendingLostPets}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value flex justify-center items-center ">
              <FaUsers className="text-2xl mr-3"></FaUsers> {stats?.users}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  ">
        <ChartStats></ChartStats>
      </div>
      <div className="w-full ">
        <VSChart></VSChart>
      </div>
    </div>
  );
};

export default AdminHome;
