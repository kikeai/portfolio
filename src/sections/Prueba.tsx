import { useAppDispatch, useAppSelector } from "../store/store"
import { changeIdiom, changeMode } from "../store/features/view";
import Footer from "../layouts/footer/Footer";
import Button from "../components/button/Button";

const Prueba = () => {
    const dispatch = useAppDispatch();
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);

    return (
        <div className={`flex flex-col justify-between ${mode? "bg-dark": "bg-light"} transition-all duration-200 h-[2500px]`}>
        <h1 className={`font-extrabold text-5xl text-center ${mode? "text-light": "text-dark"}`}>
          {idiom === "ES"? "Hola Mundo!": "Hello World!"}
        </h1>
        <a
        href="#footer"
        className={`${mode? "text-light": "text-dark"} text-center hover:cursor-pointer`}
        >
          Footer
        </a>
  
        <div className="flex justify-center items-center gap-5 h-96">
          <div>
            <h1 className={`${mode? "text-light": "text-dark"} font-bold text-3xl hover:cursor-pointer`} onClick={() => dispatch(changeIdiom())}>
              {idiom}
            </h1>
          </div>

          <Button 
          textUS="Download my resume"
          textES="Descarga mi CV"
          />

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