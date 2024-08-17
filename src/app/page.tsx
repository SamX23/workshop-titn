import Temperature from "@/components/atoms/text/Temperature";
import ListTemperature from "@/components/organisms/ListTemperature";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="flex flex-col items-center p-6 space-y-4 w-500 mx-auto">
        <h1 className="text-2xl font-semibold text-white">San Francisco</h1>
        <p className="text-sm text-gray-200">Monday, 12 April</p>
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
          <Temperature temperature="100" />
          <p className="text-xl text-gray-300">Partly Cloudy</p>
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-6 p-6 w-500 mx-auto">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium text-white">4 PM</p>
          <svg
            className=" h-10 w-10 text-gray-300"
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
          <p className="text-lg font-semibold text-white">70°</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium text-white">5 PM</p>
          <svg
            className=" h-10 w-10 text-yellow-300"
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <p className="text-lg font-semibold text-white">68°</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium text-white">6 PM</p>
          <svg
            className=" h-10 w-10 text-gray-300"
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
          <p className="text-lg font-semibold text-white">65°</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium text-white">7 PM</p>
          <svg
            className=" h-10 w-10 text-yellow-300"
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <p className="text-lg font-semibold text-white">63°</p>
        </div>
      </div>
      <ListTemperature />
    </div>
  );
}
