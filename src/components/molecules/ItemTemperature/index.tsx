import { SkyIcons, SunIcons } from "@/components/atoms/icons";

const ItemTemperature = ({
  day,
  isSunnyDay,
  minTemperature,
  maxTemperature,
}: {
  day: string;
  isSunnyDay: boolean;
  minTemperature: string;
  maxTemperature: string;
}) => {
  return (
    <div className="flex justify-between items-center mb-8 mr-4">
      <p className="text-lg font-medium text-white">{day}</p>
      <div className="flex items-center space-x-4">
        {isSunnyDay ? <SunIcons /> : <SkyIcons />}
        <p className="text-lg font-semibold text-white">
          {maxTemperature}° / {minTemperature}°
        </p>
      </div>
    </div>
  );
};

export default ItemTemperature;