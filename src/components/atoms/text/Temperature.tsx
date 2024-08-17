const Temperature = ({ temperature = "0" }: { temperature: string }) => {
  return <p className="text-6xl font-bold text-white">{temperature}°</p>;
};

export default Temperature;
