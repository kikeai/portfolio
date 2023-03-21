import { useAppSelector } from "../../../store/store";

type Props = {
    image: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ImageButton = ({onClick, image}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    return (
        <button
        onClick={onClick}
        className={`${mode? "bg-light": "bg-dark"} rounded-lg transition-all duration-200 hover:cursor-pointer`}>
            <img className={`${mode? "bg-dark": "bg-light"} px-4 py-4 rounded-lg  border-2 ${mode? "border-light": "border-dark"} transition-all duration-200 hover:translate-x-[-0.4em] hover:translate-y-[-0.4em] active:translate-x-0 active:translate-y-0`} src={image} alt="project" />
        </button>
    )
}

export default ImageButton;
