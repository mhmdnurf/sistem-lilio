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

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
    product3: 1200,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
    product3: 2600,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
    product3: 2300,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
    product3: 2589,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
    product3: 1287,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
    product3: 3700,
  },
];

const Charts = () => {
  return (
    <>
      <h1 className="mx-[30px] mt-10 mb-4 text-2xl font-semibold text-slate-700">
        Charts
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
          data={productSales}
          margin={{ right: 30, left: 30, top: 30, bottom: 30 }}
        >
          <YAxis />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />

          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />
          <Legend />

          <Area
            type="bump"
            dataKey="product1"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            stackId="1"
          />
          <Area
            type="bump"
            dataKey="product2"
            stroke="#eab308"
            fill="#eab308"
            stackId="1"
          />
          <Area
            type="bump"
            dataKey="product2"
            stroke="#22c55e"
            fill="#22c55e"
            stackId="1"
          />
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
  payload: never[] | { value: number }[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 3:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default Charts;
