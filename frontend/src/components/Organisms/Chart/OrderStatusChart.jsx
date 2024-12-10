import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export const OrderStatusChart = () => {
  const datas = [
    {
      status: "Completed",
      value: 3,
    },
    {
      status: "In-Progress",
      value: 1,
    },
    {
      status: "Pending",
      value: 6,
    },
  ];

  const colors = ["#5570f1", "#97a5eb", "#ffcc91"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="p-4 bg-white border flex flex-col gap-4 rounded-md">
          <p
            className={`label ${
              name === "Completed"
                ? "text-primary_100"
                : name === "In-Progress"
                ? "text-[#97a5eb]"
                : "text-secondary_100"
            }`}
          >{`${name}: ${value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={datas}
          dataKey="value"
          nameKey="status"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          stroke="none"
          fill="#EEF0FA"
        />

        <Pie
          data={datas}
          dataKey="value"
          nameKey="status"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          stroke="none"
        >
          {datas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};
