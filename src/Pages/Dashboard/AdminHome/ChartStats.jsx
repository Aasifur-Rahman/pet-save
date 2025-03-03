import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AnimatedGifLoader from "../../../components/AnimatedGifLoader/AnimatedGifLoader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ChartStats = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, error } = useQuery({
    queryKey: ["chartStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/chart-stats");
      return res.data;
    },
  });

  if (isLoading) return <AnimatedGifLoader></AnimatedGifLoader>;
  if (error) return <p>Error fetching data</p>;

  const chartData = data.map((item) => ({
    category: item._id,
    count: item.count,
  }));

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h2 className="text-xl font-bold text-center mb-4 text-primary">
        Pet Category Statistics
      </h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="10 2" />
          <XAxis className="capitalize" dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#E8D6CB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartStats;
