import { useAppSelector } from "../../store/store";
import {title1ES, title1US, title2ES, title2US, presentationES, presentationUS, descriptionES, descriptionUS} from "./texts"
import hand from "../../assets/hand.png"
import { transition } from "../../App";
import Button from "../../components/button/normalButton/Button";
import Header from "../../layouts/header/Header";
import Slider from "../../components/Slider/Slider";
import { motion } from 'framer-motion';

const animatePres = {
    initial: {y: '60px', opacity: 0},
    before: {
        y: [0, 0, 0, 0, 0],
        scale: [1, 1, 1, 1.5, 1],
        opacity: 1
    }
}

const Presentation = () => {
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    return (
        <section className={`flex flex-col justify-between items-center ${mode? "bg-dark": "bg-light"} ${transition} w-full h-screen`} id="presentation">
            <Header />
            <div className="w-full h-20 md:h-28"></div>
            <div className="flex flex-col items-center justify-center">
                <motion.h4
                initial="initial" 
                whileInView="before"
                variants={animatePres}
                transition={{duration: 0.5}}
                className={`flex ${mode? "text-light": "text-dark"} ${transition} text-center mb-2 md:mb-5 font-montserrat font-medium text-1xl sm:text-2xl md:text-3xl 2xl:text-5xl`}>
                    {idiom === "ES"? presentationES: presentationUS} <img className="pl-2 h-5 sm:h-7 md:h-8 2xl:h-12" src={hand} alt="hand"/>
                </motion.h4>
                <motion.h2 
                initial="initial"
                whileInView="before"
                variants={animatePres}
                transition={{duration: 0.5}}
                className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl mb-2`}>{idiom === "ES"? title1ES: title1US}</motion.h2>
                <motion.h2 
                initial="initial"
                whileInView="before"
                variants={animatePres}
                transition={{duration: 0.5}}
                className={`${mode? "text-light": "text-dark"} ${transition} text-center font-montserrat font-black italic text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl`}>{idiom === "ES"? title2ES: title2US}</motion.h2>
                <motion.p
                initial="initial"
                whileInView="before"
                variants={animatePres}
                transition={{duration: 0.5}}
                className={`${mode? "text-light": "text-gray-700"} ${transition} text-center font-montserrat font-medium text-sm md:text-lg max-w-[300px] sm:max-w-[450px] md:max-w-[600px] 2xl:max-w-[800px] 2xl:text-2xl mt-4 md:mt-7`}>{idiom === "ES"? descriptionES: descriptionUS}</motion.p>
                
                <div className="flex mt-10 gap-5 md:gap-8">
                    <Button onClick={() => {}} textES="Contáctame" textUS="Get in touch" />
                    <Button onClick={() => {}} textES="Ver proyectos" textUS="View projects" />
                </div>
            </div>
            <Slider />
        </section>
    )
}

export default Presentation;