import { useAppSelector } from "../../../store/store"
import {motion} from 'framer-motion';

type Props = {
    textES: string
    textUS: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({onClick, textES, textUS}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        <motion.button
        initial={{
            y: '60px',
            opacity:0
        }} 
        whileInView={{
            y: [0, 0, 0, 0, 0],
            scale: [1, 1, 1, 1.5, 1],
            opacity: 1,
        }}
        transition={{duration: 0.5}}
        onClick={onClick}
        className={` ${mode? "bg-light": "bg-dark"} rounded-lg transition-all duration-200 hover:cursor-pointer`}>
            <p className={`${mode? "bg-dark": "bg-light"} ${mode? "text-light": "text-dark"} rounded-md border-2 ${mode? "border-light": "border-dark"} py-2 px-6 2xl:py-3 2xl:px-7 translate-x-[-0.25em] translate-y-[-0.25em] transition-all duration-200 text-sm sm:text-base md:text-lg 2xl:text-2xl font-montserrat font-semibold hover:bg-brand hover:text-light active:translate-x-[0] active:translate-y-[0]`}>{idiom === "ES"? textES: textUS}</p>
        </motion.button>
    )
}

export default Button;