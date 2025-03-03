import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const VSChart = () => {
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["vs-chart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/vs-chart");
      return res.data;
    },
  });

  const chartData = [
    {
      name: "Foster Pets",
      approved: data?.fosterPetData.approved,
    },
    {
      name: "Lost Pets",
      approved: data?.lostPetData.approved,
    },
  ];

  return (
    <div>
      <h2>Foster vs Lost Pets Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Line for Foster Pets */}
          <Line
            type="monotone"
            dataKey="approved"
            stroke="#8884d8" // Custom color for Foster Pets
            activeDot={{ r: 8 }}
          />
          {/* Line for Lost Pets */}
          <Line
            type="monotone"
            dataKey="approved"
            stroke="#82ca9d" // Custom color for Lost Pets
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VSChart;
