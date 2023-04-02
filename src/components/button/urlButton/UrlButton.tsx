import ArrowButton from '../../../assets/svg/ArrowButton'
import { useAppSelector } from '../../../store/store'
import { type PropsUrlButton } from '../../../types/typeButtons'
import { modeParser } from '../../../utils/modeView'

const UrlButton = ({ onClick }: PropsUrlButton) => {
  const mode = useAppSelector(state => state.view.mode)

  return (
        <button
        onClick={onClick}
        className={`${modeParser(mode, false, 'bg')} rounded-full transition-all duration-200 hover:cursor-pointer`}>
            <ArrowButton />
        </button>
  )
}

export default UrlButton
