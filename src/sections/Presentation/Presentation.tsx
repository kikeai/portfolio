import { useAppSelector } from "../../store/store";
import {title1ES, title1US, title2ES, title2US, presentationES, presentationUS, descriptionES, descriptionUS} from "./texts"
import hand from "../../assets/hand.png"
import { transition } from "../../App";
import Button from "../../components/button/Button";
import Header from "../../layouts/header/Header";
import Slider from "../../components/Slider/Slider";

const Presentation = () => {
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    return (
        <section className={`flex flex-col justify-between items-center ${mode? "bg-dark": "bg-light"} ${transition} w-full h-screen`} id="presentation">
            <Header />
            <div className="w-full h-20 md:h-26"></div>
            <div className="flex flex-col items-center justify-center">
                <h4 
                className={`flex ${mode? "text-light": "text-dark"} ${transition} text-center mb-2 md:mb-5 font-montserrat font-medium text-1xl md:text-3xl`}>
                    {idiom === "ES"? presentationES: presentationUS} <img className="pl-2 h-6 md:h-8" src={hand} alt="hand"/>
                </h4>
                <h2 className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-3xl md:text-6xl mb-2`}>{idiom === "ES"? title1ES: title1US}</h2>
                <h2 className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-3xl md:text-6xl`}>{idiom === "ES"? title2ES: title2US}</h2>
                <p className={`${mode? "text-light": "text-gray-700"} ${transition} text-center font-montserrat font-medium text-sm md:text-lg max-w-[300px] md:max-w-[600px] mt-4 md:mt-7`}>{idiom === "ES"? descriptionES: descriptionUS}</p>
                
                <div className="flex mt-10 gap-5 md:gap-8">
                    <Button textES="Contáctame" textUS="Get in touch" />
                    <Button textES="Ver proyectos" textUS="View projects" />
                </div>
            </div>
            <Slider />
        </section>
    )
}

export default Presentation;