import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userDetails, refetch } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data[0];
    },
  });

  return [userDetails, refetch];
};

export default useUserDetails;
