import { useAppDispatch, useAppSelector } from "../../../store/store";
import logoBlack from "../../../assets/logo-negro.svg";
import logoWhite from "../../../assets/logo-blanco.svg";
import closeIconBlack from "../../../assets/close-negro.svg";
import closeIconWhite from "../../../assets/close-blanco.svg";
import { transition } from "../../../App";
import { OpenCloseSidePanel } from "../../../store/features/popups";


const Header = () => {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(state => state.view.mode);
    return (
        <div className={`flex flex-row-reverse justify-between border-b ${mode? "border-b-light": "border-b-dark"} items-center w-full py-6 px-6`}>
            <div>
                <img className={`${transition} h-5`} src={mode? logoWhite: logoBlack} alt="logo" />
            </div>
            <div onClick={() => {dispatch(OpenCloseSidePanel())}} className="hover:cursor-pointer">
                <img className={`${transition} h-4`} src={mode? closeIconWhite: closeIconBlack} alt="closeicon" />
            </div>
        </div>
    )
}

export default Header;