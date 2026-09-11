import { weatherIcons } from "./Weather";


export default function WeatherCard(props) {
   /// const iconKey = `${props.weatherCode}_${props.isDay}`;
    return(
        <div className="flex flex-col items-center" >
            
            <img src={weatherIcons[props?.weatherCode]} alt="" className="w-[200px] h-[200px]" />
            <h2 className="persian text-[80px] font-[600] tracking-[0%] font-bold">{props?.value}</h2>

        </div>
    )
}