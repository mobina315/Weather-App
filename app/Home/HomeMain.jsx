"use client";
import WeatherCard from "../Component/WeatherCard";
import Header from "./Header";
import cities from "../deta"
import { useEffect, useState } from "react";
import { DayWwacherCard } from "../Component/DayWeatherCard";


export default function HomeMain() {
    const [selectedCity, setSelectedCity] = useState("تهران");
    const [weatherData, setWeatherData] = useState(null);
    
   const cityData = cities.find((city) => city.name === selectedCity);

    useEffect(() => {
        if (!cityData) return;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=6&timezone=auto`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setWeatherData(data);
         });
    }, [selectedCity]);
   const persianDate = weatherData ? new Date(weatherData.current.time).toLocaleDateString("fa-IR", { day: "numeric", month: "long", })
    : "";

    return(
        <div className="flex flex-col gap-[40px]">
            
                <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                <div className="flex flex-col items-center gap-[32px] persian ">

                    <div className="flex flex-col gap-[24px]">

                        <div  className="flex flex-col gap-[24px] items-center">

                            <WeatherCard className="" tital="دما" value={`${weatherData?.current?.temperature_2m}°`}/>
                        <p className="text-slate-500 text-[15px] font-[400] tracking-[0%] ">
                        <span>{selectedCity}</span>
                        <span>{persianDate}</span>
                       </p>

                        </div>

                    <div className="flex flex-col gap-[20px] items-center rounded-[12px] border-[1px] border-slate-200 p-[24px] w-[488px]">
                        <span className="flex justify-between items-center w-full ">
                            
                           <h1 >رطوبت</h1>
                           <h1>{`${weatherData?.current?.relative_humidity_2m}%`} </h1>
                        </span>
                        <span className="flex justify-between  items-center w-full ">
                            
                            <h1>باد</h1>
                            <h1>{`${weatherData?.current?.wind_speed_10m}km/h`}</h1>
                        </span>
                    </div>
                    </div>

                    <div dir="ltr" className="flex flex-col gap-[12px] items-end persian ">
                        <h1>روز های آینده {selectedCity}</h1>
                        <div  dir="rtl" className="flex flex-row items-center gap-[12px] "> 
                            {weatherData?.daily.time.slice(1).map((date, index) => {
                                const dayName = new Date(date).toLocaleDateString("fa-IR", {
                                   weekday: "long",
                                 });
                               return (
                                <DayWwacherCard
                                 key={date}
                                 date={dayName}
                                 maxTemp={weatherData.daily.temperature_2m_max[index+1]}
                                 weatherCode={weatherData.daily.weather_code[index+1]}

                                />);
                                } )}
                       </div>
                    </div>


                </div>
        </div>
    )
}