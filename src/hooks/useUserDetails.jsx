import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: userDetails = [0],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/${user.email}`);
      console.log(res.data.userDetails);
      return res.data.userDetails;
    },
    // enabled: !!user.email,
  });
  return [userDetails, isPending, refetch];
};

export default useUserDetails;
