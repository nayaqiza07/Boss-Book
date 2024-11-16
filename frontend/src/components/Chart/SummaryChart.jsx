import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  // CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const SummaryChart = () => {
  const data = [
    {
      month: "Jan",
      total: 4000,
      pv: 2400,
    },
    {
      month: "Feb",
      total: 3000,
      pv: 1398,
    },
    {
      month: "Mar",
      total: 2000,
      pv: 9800,
    },
    {
      month: "Apr",
      total: 2780,
      pv: 3908,
    },
    {
      month: "May",
      total: 1890,
      pv: 4800,
    },
    {
      month: "Jun",
      total: 2390,
      pv: 3800,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="primary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5570f1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5570f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="secondary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffcc91" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffcc91" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#5570f1"
          fillOpacity={1}
          fill="url(#primary)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#ffcc91"
          fillOpacity={1}
          fill="url(#secondary)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
