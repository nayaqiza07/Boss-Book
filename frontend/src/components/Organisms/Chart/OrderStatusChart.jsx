import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export const OrderStatusChart = ({ datas }) => {
  // console.log(datas);

  const colors = [
    "#B7B7B7",
    "#A1D6B2",
    "#295F98",
    "#F0A8D0",
    "#91DDCF",
    "#FF8A8A",
    "#EF9C66",
    "#B3C8CF",
    "#8E7AB5",
    "#F6F193",
  ];
  // const colors = [
  //   "#F44336",
  //   "#FF9800",
  //   "#FFEB3B",
  //   "#4CAF50",
  //   "#2196F3",
  //   "#9C27B0",
  //   "#009688",
  //   "#FFC107",
  //   "#673AB7",
  //   "#03A9F4",
  // ];

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
        <Legend />
        <Pie
          data={datas}
          dataKey="value"
          nameKey="kategori"
          cx="50%"
          cy="50%"
          outerRadius={80}
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
