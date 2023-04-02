import { useAppDispatch, useAppSelector } from '../../../store/store'
import { OpenCloseSidePanel } from '../../../store/features/popups'
import CloseIcon from '../../../assets/svg/CloseIcon'
import Logo from '../../../assets/svg/Logo'
import { modeParser } from '../../../utils/modeView'

const Header = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.view.mode)
  return (
    <div className={`flex flex-row-reverse justify-between border-b ${modeParser(mode, false, 'border-b')} items-center w-full py-6 px-6`}>
      <div>
        <Logo />
      </div>
      <div
      onClick={() => { dispatch(OpenCloseSidePanel()) }}
      className='hover:cursor-pointer'>
        <CloseIcon />
      </div>
    </div>
  )
}

export default Header
