import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export const OrderStatusChart = ({ datas }) => {
  console.log(datas);

  const colors = [
    "#F44336",
    "#FF9800",
    "#FFEB3B",
    "#4CAF50",
    "#2196F3",
    "#9C27B0",
    "#009688",
    "#FFC107",
    "#673AB7",
    "#03A9F4",
  ];
  // const colors = [
  //   "#2ecc71",
  //   "#3498db",
  //   "#9b59b6",
  //   "#f1c40f",
  //   "#e74c3c",
  //   "#1abc9c",
  //   "#e67e22",
  //   "#8e44ad",
  //   "#34495e",
  //   "#95a5a6",
  // ];

  // const colors = ["#5570f1", "#97a5eb", "#ffcc91", "#ffcc91"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="p-4 bg-white border flex flex-col gap-4 rounded-md">
          {/* <p
            className={`label ${
              name === "Completed"
                ? "text-primary_100"
                : name === "In-Progress"
                ? "text-[#97a5eb]"
                : "text-secondary_100"
            }`}
          >{`${name}: ${value.toFixed(0)}%`}</p> */}
          <p className={`label`}>{`${name}: ${value.toFixed(0)}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        {/* <Pie
          data={datas}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          stroke="none"
          fill="#EEF0FA"
        /> */}
        <Legend />
        <Pie
          data={datas}
          dataKey="value"
          nameKey="kategori"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          stroke="none"
        >
          {datas &&
            datas.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};
