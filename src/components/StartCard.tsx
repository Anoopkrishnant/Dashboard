import { fetchGet } from "@/app/hooks/useGet";
import { useQuery } from "@tanstack/react-query";

const StatsOverview = () => {

  const info = useQuery({ queryKey: ['component1'], queryFn:()=> fetchGet('api/v1/sample_assignment_api_1/') })
  console.log({info});
  
  const stats = [
    {
      title: "Purchases",
      value: "4,294",
      change: "+32%",
      positive: true,
    },
    {
      title: "Revenue",
      value: "$322.3k",
      change: "+49%",
      positive: true,
    },
    {
      title: "Refunds",
      value: "$8.2k",
      change: "-7%",
      positive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className=" rounded-xl p-5 flex flex-col gap-2 border border-gray-200 w-full"
        >
          <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
          <div className="flex">
          <div className="text-2xl font-semibold">{stat.value}</div>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${
              stat.positive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {stat.change} {stat.positive ? "⬆" : ""}
          </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
