import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = () => {
  const [topBahan, setTopBahan] = React.useState([]);

  const fetchTopBahan = React.useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/top-bahan");
      const data = await response.json();
      setTopBahan(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    fetchTopBahan();
  }, [fetchTopBahan]);

  const keys = React.useMemo(() => {
    const allKeys = topBahan.reduce((keys, item) => {
      return [...keys, ...Object.keys(item)];
    }, [] as string[]); // Assert that the keys are strings

    // Remove duplicates and exclude "month"
    return [...new Set(allKeys)].filter((key) => key !== "month");
  }, [topBahan]);
  const colors = [
    "#0ea5e9",
    "#eab308",
    "#22c55e",
    "#ff4500",
    "#2e8b57",
    "#da70d6",
    "#800080",
    "#ff00ff",
    "#bc8f8f",
    "#4169e1",
    "#8b4513",
    "#fa8072",
    "#f4a460",
    "#2e8b57",
    "#dda0dd",
    "#5f9ea0",
  ];
  return (
    <>
      <h1 className="mx-[30px] mt-10 mb-4 text-2xl font-semibold text-slate-700">
        Analytics
      </h1>
      <ResponsiveContainer
        height={400}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          marginLeft: 20,
          marginRight: 20,
          maxWidth: "calc(100% - 40px)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AreaChart
          width={500}
          height={400}
          data={topBahan}
          margin={{ right: 30, left: 30, top: 30, bottom: 30 }}
        >
          <YAxis />
          <XAxis dataKey="month" />
          <CartesianGrid strokeDasharray="5 5" />

          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />
          <Legend />

          {keys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              stackId="1"
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: never[] | { value: number; name: string }[];
  label: string;
}) => {
  const colors = [
    "#0ea5e9",
    "#eab308",
    "#22c55e",
    "#ff4500",
    "#2e8b57",
    "#da70d6",
    "#800080",
    "#ff00ff",
    "#bc8f8f",
    "#4169e1",
    "#8b4513",
    "#fa8072",
    "#f4a460",
    "#2e8b57",
    "#dda0dd",
    "#5f9ea0",
  ];
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        {payload.map((item, index) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: colors[index % colors.length] }}
          >
            {item.name}:<span className="ml-2">{item.value}</span>
          </p>
        ))}
      </div>
    );
  }
};

export default Charts;
