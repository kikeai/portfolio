import { useAppSelector } from '../../store/store'
import { type PropsButtonForm } from '../../types/typeButtons'

const ButtonForm = ({ onClick, textES, textUS, type, disabled }: PropsButtonForm) => {
  const idiom = useAppSelector(state => state.view.idiom)
  return (
    <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className='bg-dark rounded-lg transition-all duration-200 hover:cursor-pointer disabled:cursor-not-allowed'>
      <p className='bg-light text-dark rounded-md border-2 border-dark py-2 px-6 2xl:py-3 2xl:px-7 translate-x-[-0.25em] translate-y-[-0.25em] transition-all duration-200 text-sm sm:text-base md:text-lg 2xl:text-2xl font-montserrat font-semibold hover:bg-brand hover:text-light active:translate-x-[0] active:translate-y-[0]'>
        {idiom === 'ES' ? textES : textUS}
      </p>
    </button>
  )
}

export default ButtonForm
