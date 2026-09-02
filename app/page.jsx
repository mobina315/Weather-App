import Footer from "./Home/Footer";
import HomeMain from "./Home/HomeMain";


export default function Page(){
    return(
        <div>
            <div className="flex flex-col justify-between gap-[50px]"> 
                 <HomeMain/>
                 <Footer/>
            </div>
        </div>
    )
}