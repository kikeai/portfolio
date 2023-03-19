import { useAppSelector } from "../../../store/store"
import {motion} from 'framer-motion';

type Props = {
    image: string
    onClick: any
}

const SmallButton = ({onClick, image}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        // <button className={`${mode? "bg-dark": "bg-light"} ${mode? "text-light": "text-dark"} border-2 ${mode? "border-light": "border-dark"} ${mode? "drop-shadow-[4px_4px_0_rgba(255,255,255,1)]": "drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"} h-10 px-4 rounded-md transition-all duration-200 hover:cursor-pointer active:drop-shadow-none hover:bg-brand hover:text-light`}>
        //     <p className={`text-lg font-montserrat font-semibold`}>{idiom === "ES"? textES: textUS}</p>
        // </button>

        <button
        onClick={onClick}
        className={`bg-dark rounded-full transition-all duration-200 hover:cursor-pointer`}>
            <img className={`bg-light text-dark rounded-full  border-2 border-dark translate-x-[-0.20em] translate-y-[-0.20em] transition-all duration-200 hover:text-light active:translate-x-[0] active:translate-y-[0]`} src={image} alt="red" />
        </button>
    )
}

export default SmallButton;