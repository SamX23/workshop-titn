export const getWeather = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.KEY}`,
    );

    if (response) {
      const data: Weather = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

interface Weather {
  name: string;
  main: {
    temp: number;
  };
}
