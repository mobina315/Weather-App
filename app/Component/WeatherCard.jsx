

export default function WeatherCard(props) {
    return(
        <div className="flex flex-col items-center" >
            
            <img src="/imgs/Imag(5).png" alt="" className="w-[200px] h-[200px]" />
            <h2 className="persian text-[80px] font-[600] tracking-[0%] font-bold">{props?.value}</h2>

        </div>
    )
}