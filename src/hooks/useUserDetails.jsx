import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: userDetails = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      console.log(res.data.userDetails);
      return res.data;
    },
    enabled: !!user.email,
  });
  return [userDetails, isPending, refetch];
};

export default useUserDetails;
