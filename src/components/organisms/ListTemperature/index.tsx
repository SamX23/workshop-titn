import ItemTemperature from "@/components/molecules/ItemTemperature";

const ListTemperature = () => {
  const data = [
    {
      day: "Tuesday",
      isSunnyDay: false,
      minTemperature: "60",
      maxTemperature: "73",
    },
    {
      day: "Wednesday",
      isSunnyDay: true,
      minTemperature: "62",
      maxTemperature: "76",
    },
    {
      day: "Thursday",
      isSunnyDay: false,
      minTemperature: "57",
      maxTemperature: "70",
    },
    {
      day: "Friday",
      isSunnyDay: false,
      minTemperature: "57",
      maxTemperature: "70",
    },
    {
      day: "Saturday",
      isSunnyDay: true,
      minTemperature: "62",
      maxTemperature: "76",
    },
    {
      day: "Sunday",
      isSunnyDay: false,
      minTemperature: "57",
      maxTemperature: "70",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto space-y-6 p-6 w-500 mx-auto">
      {data.map((item, index) => (
        <ItemTemperature
          key={index}
          day={item.day}
          isSunnyDay={item.isSunnyDay}
          minTemperature={item.minTemperature}
          maxTemperature={item.maxTemperature}
        />
      ))}
    </div>
  );
};

export default ListTemperature;
