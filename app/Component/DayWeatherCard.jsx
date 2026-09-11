import { weatherIcons } from "./Weather";

export function DayWwacherCard(props) {

    return(
        <div className="w-[88px] border-[0.8px] border-slate-200 rounded-[6px] flex flex-col gap-[16px] px-[8px] py-[12px] items-center">
            <img src={weatherIcons[props?.weatherCode]} alt=""  className="w-[48px] h-[48px]"/>
            <section className="flex flex-col gap-[6px] items-center ">
                <h1 className="text-[20px] font-[600] tracking-[0%] font-bold ">{`${props?.maxTemp}°`}</h1>
                <p className="text-[14px] font-[400] tracking-[0%]  persian ">{props?.date}</p>
            </section>

        </div>
    );
}