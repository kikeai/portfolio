import { transition } from "../../../App"
import {useAppSelector} from "../../../store/store"

type Props = {
    image: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const UrlButton = ({onClick, image}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        <button
        onClick={onClick}
        className={`${mode? "bg-light": "bg-dark"} rounded-full transition-all duration-200 hover:cursor-pointer`}>
            <img className={`rounded-full  border-2 ${mode? "border-light": "border-dark"} ${transition} translate-x-[-0.20em] translate-y-[-0.20em] transition-all duration-200 hover:text-light active:translate-x-[0] active:translate-y-[0]`} src={image} alt="red" />
        </button>
    )
}

export default UrlButton;