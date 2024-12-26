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
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Feb",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Mar",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Apr",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "May",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Jun",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Jul",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Aug",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Sep",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Okt",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Nov",
      pemasukan: 0,
      pengeluaran: 0,
    },
    {
      month: "Des",
      pemasukan: 9000,
      pengeluaran: 3800,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
          dataKey="pemasukan"
          stroke="#5570f1"
          fillOpacity={1}
          fill="url(#primary)"
        />
        <Area
          type="monotone"
          dataKey="pengeluaran"
          stroke="#ffcc91"
          fillOpacity={1}
          fill="url(#secondary)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
