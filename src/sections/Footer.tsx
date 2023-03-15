import { useAppDispatch, useAppSelector } from "../store/store";  

const Footer = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.view.mode);

    return (
        <footer className={`w-full h-28 ${mode? "bg-slate-900": "bg-gray-100"}`} id="footer">
            
        </footer>
    )
}

export default Footer;