import { useAppSelector } from "../../store/store";
import {title1ES, title1US, title2ES, title2US, presentationES, presentationUS, descriptionES, descriptionUS} from "./texts"
import hand from "../../assets/hand.png"
import { transition } from "../../App";
import Button from "../../components/button/Button";

const Presentation = () => {
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    return (
        <section className={`flex justify-center items-center ${mode? "bg-dark": "bg-light"} ${transition} w-full h-[550px]`} id="presentation">
            <div className="flex flex-col items-center justify-center">
                <h4 
                className={`flex ${mode? "text-light": "text-dark"} ${transition} text-center mb-5 font-montserrat font-medium text-3xl`}>
                    {idiom === "ES"? presentationES: presentationUS} <img className="pl-2 h-8" src={hand} alt="hand"/>
                </h4>
                <h2 className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-6xl mb-2`}>{idiom === "ES"? title1ES: title1US}</h2>
                <h2 className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-6xl`}>{idiom === "ES"? title2ES: title2US}</h2>
                <p className={`${mode? "text-light": "text-gray-700"} ${transition} text-center font-montserrat font-medium text-lg max-w-[600px] mt-7`}>{idiom === "ES"? descriptionES: descriptionUS}</p>
                
                <div className="flex mt-10 gap-8">
                    <Button textES="Ponerse en contacto" textUS="Get in touch" />
                    <Button textES="Ver proyectos" textUS="View projects" />
                </div>
            </div>
        </section>
    )
}

export default Presentation;