import { useAppSelector } from '../../../store/store'
import { type PropsImageButton } from '../../../types/typeButtons'
import { modeParser } from '../../../utils/modeView'

const ImageButton = ({ onClick, image }: PropsImageButton) => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <button
    onClick={onClick}
    className={`${modeParser(mode, false, 'bg')} rounded-lg transition-all duration-200 hover:cursor-pointer`}>
      <img className={`${modeParser(mode, true, 'bg')} px-4 py-4 rounded-lg  border-2 ${modeParser(mode, false, 'border')} transition-all duration-200 hover:translate-x-[-0.4em] hover:translate-y-[-0.4em] active:translate-x-0 active:translate-y-0`}
      src={image}
      alt='project' />
    </button>
  )
}

export default ImageButton
