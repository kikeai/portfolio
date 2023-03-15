import logoLight from "../../assets/logo-negro.svg";
import logoDark from "../../assets/logo-blanco.svg";
import menuIcon from "../../assets/menu.svg"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeIdiom, changeMode } from "../../store/features/view";
import { transition } from "../../App";

const Header = () => {
    const dispatch = useAppDispatch();
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    const textHeader = `${mode? "text-light": "text-gray-600"} ${transition} text-lg font-montserrat`

    return (
        <header className="flex px-12 h-24 justify-between items-center md:px-20 md:h-28 w-full">
            <div>
                <img className={`h-5 md:h-8 ${transition}`} src={`${mode? logoDark: logoLight}`} alt="logo kike" />
            </div>

            <div className="hidden md:flex md:gap-12 md:visible">
                <p className="text-lg border-2 border-transparent rounded-md px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light" onClick={() => dispatch(changeMode())}>{mode ? "🌚": "🌞"}</p>
                <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#">{idiom === "ES"? "Sobre mí": "About me"}</a>
                <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#">{idiom === "ES"? "Proyectos": "Projects"}</a>
                <a className={`${textHeader} font-medium hover:underline hover:text-brand`} href="#">{idiom === "ES"? "Contacto": "Contact"}</a>
                <p className={`${textHeader} font-bold border-2 border-transparent rounded-md px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light`} onClick={() => dispatch(changeIdiom())}>{idiom}</p>
            </div>

            <div className="md:hidden">
                <img className="hover:cursor-pointer md:hidden" src={menuIcon} alt="menu" />
            </div>
        </header>
    )
}

export default Header;