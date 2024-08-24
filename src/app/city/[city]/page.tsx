import Temperature from "@/components/atoms/text/Temperature";
import { getWeather } from "@/services/fetcher";

const CityPage = async ({ params }: { params: { city: string } }) => {
  const data = await getWeather(params.city);

  if (!data) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col items-center p-6 space-y-4 w-500 mx-auto">
          <h1 className="text-2xl font-semibold text-white">
            Failed to fetch weather data
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center p-6 space-y-4 w-500 mx-auto">
        <h1 className="text-2xl font-semibold text-white">
          {data?.name || "City Name"}
        </h1>
        <p className="text-sm text-gray-200">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="flex flex-col items-center space-y-2">
          <svg
            className=" h-20 w-20 text-gray-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <Temperature temperature={data?.main?.temp?.toFixed(0) || "0"} />
          <p className="text-xl text-gray-300">Partly Cloudy</p>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
