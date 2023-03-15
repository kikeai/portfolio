import { useAppDispatch, useAppSelector } from "../store/store"
import { useNavigate } from "react-router-dom";
import { changeIdiom, changeMode } from "../store/features/view";
import Footer from "./Footer";

const Prueba = () => {
    const dispatch = useAppDispatch();
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    const navigate = useNavigate()

    return (
        <div className={`flex flex-col justify-between ${mode? "bg-slate-100": "bg-gray-900"} h-[2500px]`}>
        <h1 className={`font-extrabold text-5xl text-center ${mode? "text-gray-900": "text-gray-100"}`}>
          {idiom === "ES"? "Hola Mundo!": "Hello World!"}
        </h1>
        <a
        href="#footer"
        className={`${mode? "text-gray-900": "text-gray-100"} text-center hover:cursor-pointer`}
        >
          Footer
        </a>
  
        <div className="flex justify-center items-center gap-5 h-96">
          <div>
            <h1 className={`${mode? "text-gray-900": "text-gray-100"} font-bold text-3xl hover:cursor-pointer`} onClick={() => dispatch(changeIdiom())}>
              {idiom}
            </h1>
          </div>
  
          <div>
            <h1 className="text-3xl hover:cursor-pointer" onClick={() => dispatch(changeMode())}>
              {mode ? "🌚": "🌞"}
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Prueba;