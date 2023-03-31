import { transition } from '../../App'
import { useAppSelector } from '../../store/store'
import { type LabelType } from '../../types/types'

const Label = ({ textES, textUS }: LabelType) => {
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)
  return (
    <div>
      <p className={`border ${mode ? 'text-light bg-dark border-light' : 'text-dark bg-light border-dark'} ${transition} px-4 p-1 font-montserrat text-sm xl:text-base font-medium rounded-full`}>
        {idiom === 'ES' ? textES : textUS}
      </p>
    </div>
  )
}

export default Label
