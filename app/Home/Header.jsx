"use client";
import cities from "../deta"

export default function Header({ selectedCity, setSelectedCity }) {    
    return(
        
            <div className="flex justify-between px-[56px] py-[32px] border-b-[1px] border-slate-200 " dir="ltr">

                <h1 className="english text-[16px] font-[700] tracking-[0%] font-bold ">Starweather</h1>
                
                <div className="flex flex-ro  gap-[8px] persian">
                    

                    <select id="city"value={selectedCity}  onChange={(e) => setSelectedCity(e.target.value)} dir="rtl" className=" rounded-[12px] border-[0px] border-slate-200">
                        <option value="default"className="text-[#b3b3b3]"disabled>انتخاب شهر</option>
                        {cities.map((city) => ( <option key={city.name} value={city.name}className="text-black ">
                               {city.name}
                           </option>))}
                   </select>       

                   <img src="/imgs/location.png" alt="" />
            

                </div>
                

            </div>
        
    )
}