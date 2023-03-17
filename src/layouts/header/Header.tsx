import logoLight from "../../assets/logo-negro.svg";
import logoDark from "../../assets/logo-blanco.svg";
import menuIconDark from "../../assets/menu-negro.svg";
import menuIconlight from "../../assets/menu-blanco.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeIdiom, changeMode } from "../../store/features/view";
import { transition } from "../../App";
import { FormControlLabel } from "@mui/material";
import MaterialUISwitch from "./togle";

const Header = () => {
    const dispatch = useAppDispatch();
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    const textHeader = `${mode? "text-light": "text-gray-600"} ${transition} text-lg font-montserrat`

    return (
        <header className="fixed top-0 backdrop-blur z-40 flex px-12 h-20 justify-center items-center md:px-20 md:h-28 w-full">
            <div className="flex justify-between w-full max-w-[1440px]">
                <div>
                    <img className={`h-5 md:h-8 ${transition}`} src={`${mode? logoDark: logoLight}`} alt="logo kike" />
                </div>

                <div className="hidden md:flex md:items-center md:gap-12 md:visible">
                    {/* <p className="text-lg border-2 border-transparent rounded-md px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light" onClick={() => dispatch(changeMode())}>{mode ? "🌚": "🌞"}</p> */}
                    
                    <FormControlLabel
                        onChange={() => dispatch(changeMode())}
                        control={<MaterialUISwitch sx={{ m: 1 }} />}
                        label=""
                    />
                    <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#about">{idiom === "ES"? "Sobre mí": "About me"}</a>
                    <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#">{idiom === "ES"? "Proyectos": "Projects"}</a>
                    <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#">{idiom === "ES"? "Contacto": "Contact"}</a>
                    <p className={`${textHeader} font-bold border-2 border-transparent rounded-md px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light`} onClick={() => dispatch(changeIdiom())}>{idiom}</p>
                </div>

                <div className="md:hidden">
                    <img className="hover:cursor-pointer md:hidden" src={mode? menuIconlight: menuIconDark} alt="menu" />
                </div>
            </div>
        </header>
    )
}

export default Header;