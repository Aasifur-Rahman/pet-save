import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserDetails = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: userDetails = [], refetch } = useQuery({
    queryKey: ["userDetails", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data.userDetails[0];
    },
    enabled: !!user.email,
  });
  console.log(userDetails);
  return [userDetails, refetch];
};

export default useUserDetails;
