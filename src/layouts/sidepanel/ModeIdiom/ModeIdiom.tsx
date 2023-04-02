import { useAppDispatch, useAppSelector } from '../../../store/store'
import { changeIdiom, changeMode } from '../../../store/features/view'
import { FormControlLabel } from '@mui/material'
import MaterialUISwitch from '../../header/togle'
import { transition } from '../../../App'
import { modeParser } from '../../../utils/modeView'

const ModeIdiom = () => {
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)
  const dispatch = useAppDispatch()
  const textHeader = `${modeParser(mode, false, 'text', 'gray-700')} ${transition} text-lg 2xl:text-2xl font-montserrat`
  return (
    <div className='flex justify-between items-center py-6 px-6 w-full'>
      <div>
        <FormControlLabel
        checked={mode}
        onChange={() => {
          dispatch(changeMode())
        }}
        control={<MaterialUISwitch sx={{ m: 1 }} />}
        label=''
        />
      </div>
      <p
      className={`${textHeader} font-bold border-2 border-transparent rounded-md px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light`}
      onClick={() => {
        dispatch(changeIdiom())
      }}>
        {idiom}
      </p>
    </div>
  )
}

export default ModeIdiom
