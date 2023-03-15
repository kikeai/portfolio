import { useAppSelector } from "../../store/store"

type Props = {
    textES: string
    textUS: string
}

const Button = ({textES, textUS}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        <button className={`${mode? "bg-dark": "bg-light"} ${mode? "text-light": "text-dark"} border-2 ${mode? "border-light": "border-dark"} ${mode? "drop-shadow-[4px_4px_0_rgba(255,255,255,1)]": "drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"} h-10 px-4 rounded-md transition-all duration-200 hover:cursor-pointer active:drop-shadow-none hover:bg-brand hover:text-light`}>
            <p className={`text-lg font-montserrat font-semibold`}>{idiom === "ES"? textES: textUS}</p>
        </button>
    )
}

export default Button;