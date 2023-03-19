import { useAppSelector } from "../../store/store"
import {motion} from 'framer-motion';

type Props = {
    textES: string
    textUS: string
    onClick: any
}

const Button = ({onClick, textES, textUS}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        // <button className={`${mode? "bg-dark": "bg-light"} ${mode? "text-light": "text-dark"} border-2 ${mode? "border-light": "border-dark"} ${mode? "drop-shadow-[4px_4px_0_rgba(255,255,255,1)]": "drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"} h-10 px-4 rounded-md transition-all duration-200 hover:cursor-pointer active:drop-shadow-none hover:bg-brand hover:text-light`}>
        //     <p className={`text-lg font-montserrat font-semibold`}>{idiom === "ES"? textES: textUS}</p>
        // </button>

        <motion.button
        initial={{
            y: '60px',
        }} 
        whileInView={{
            y: [0, 0, 0, 0, 0],
            scale: [1, 1, 1, 1.5, 1]
        }}
        transition={{duration: 0.5}}
        onClick={onClick} className={` ${mode? "bg-light": "bg-dark"} rounded-md transition-all duration-200 hover:cursor-pointer`}>
            <p className={`${mode? "bg-dark": "bg-light"} ${mode? "text-light": "text-dark"} rounded-md border-2 ${mode? "border-light": "border-dark"} py-2 px-6 translate-x-[-0.25em] translate-y-[-0.25em] transition-all duration-200 text-base md:text-lg font-montserrat font-semibold hover:bg-brand hover:text-light active:translate-x-[0] active:translate-y-[0]`}>{idiom === "ES"? textES: textUS}</p>
        </motion.button>
    )
}

export default Button;