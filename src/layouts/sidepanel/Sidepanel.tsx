import { useAppDispatch, useAppSelector } from "../../store/store";
import { motion } from "framer-motion";
import { useState } from "react";
import { OpenCloseModal, OpenCloseSidePanel } from "../../store/features/popups";
import Header from "./header/Header";
import ModeIdiom from "./ModeIdiom/ModeIdiom";
import aboutBlack from "../../assets/about-me-icon-black.svg";
import aboutWhite from "../../assets/about-me-icon-white.svg";
import projectBlack from "../../assets/projects-icon-black.svg";
import projectWhite from "../../assets/projects-icon-white.svg";
import contactBlack from "../../assets/contact-icon-black.svg";
import contactWhite from "../../assets/contact-icon-white.svg";
import ButtonSection from "./buttonSection/ButtonSection";
import NestedModal from "../modal/Modal";



const Sidepanel = () => {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    const openClose = useAppSelector(state => state.popups.sidepanel)
    
    return (
        <div className={`flex flex-row-reverse fixed z-50 backdrop-blur ${openClose? "opacity-100 visible": "opacity-0 invisible"} transition-all ease-in-out duration-500 ${mode? "bg-light/60": "bg-dark/60"} w-full`}>
            <div className={`${mode? "bg-dark": "bg-light"} ${openClose? "translate-x-0": "translate-x-[100%]"} transition-all ease-in-out duration-500 w-3/4 max-w-[400px] h-screen`}>
                <Header />
                <ModeIdiom />
                <ButtonSection 
                icon={mode? aboutWhite: aboutBlack}
                text={idiom === "ES"? "Sobre mí": "About me"}
                onClick={() => {
                    window.location.replace("/#about");
                    dispatch(OpenCloseSidePanel());
                }}
                />
                <ButtonSection 
                icon={mode? projectWhite: projectBlack}
                text={idiom === "ES"? "Proyectos": "Projects"}
                onClick={() => {
                    window.location.replace("/#projects");
                    dispatch(OpenCloseSidePanel());
                }}
                />
                <ButtonSection 
                icon={mode? contactWhite: contactBlack}
                text={idiom === "ES"? "Contacto": "Contact"}
                onClick={() => {
                    dispatch(OpenCloseModal());
                    dispatch(OpenCloseSidePanel());
                }}
                />
            </div>
        </div>
    )
}

export default Sidepanel;