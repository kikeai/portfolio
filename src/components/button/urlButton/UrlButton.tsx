import ArrowButton from '../../../assets/svg/ArrowButton'
import { useAppSelector } from '../../../store/store'

interface Props {
  image: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const UrlButton = ({ onClick, image }: Props) => {
  const mode = useAppSelector(state => state.view.mode)

  return (
        <button
        onClick={onClick}
        className={`${mode ? 'bg-light' : 'bg-dark'} rounded-full transition-all duration-200 hover:cursor-pointer`}>
            <ArrowButton />
        </button>
  )
}

export default UrlButton
