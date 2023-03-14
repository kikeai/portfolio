import { useAppDispatch, useAppSelector } from "./store/store"
import { changeIdiom, changeMode } from "./store/features/view";


function App() {
  const dispatch = useAppDispatch();
  const idiom = useAppSelector(state => state.view.idiom);
  const mode = useAppSelector(state => state.view.mode);

  return (
    <div className={`${mode? "bg-slate-100": "bg-gray-900"} h-screen`}>
      <h1 className={`font-extrabold text-5xl text-center ${mode? "text-gray-900": "text-gray-100"}`}>
        {idiom === "ES"? "Hola Mundo!": "Hello World!"}
      </h1>

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

    </div>
  )
}

export default App
