import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserDetails = () => {
  const { user } = useAuth();
  console.log(user.email);
  const axiosSecure = useAxiosSecure();

  const { data: userDetails } = useQuery({
    queryKey: ["userDetails", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);

      return res.data.userDetails[0];
    },
    enabled: !!user.email,
  });

  return [userDetails];
};

export default useUserDetails;
