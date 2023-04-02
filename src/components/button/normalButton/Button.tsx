import { useAppSelector } from '../../../store/store'
import { motion } from 'framer-motion'
import { type PropsButton } from '../../../types/typeButtons'
import { idiomParser, modeParser } from '../../../utils/modeView'

const Button = ({ onClick, textES, textUS }: PropsButton) => {
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)

  return (
    <motion.button
    initial={{
      y: '60px',
      opacity: 0
    }}
    whileInView={{
      y: [0, 0, 0, 0, 0],
      scale: [1, 1, 1, 1.5, 1],
      opacity: 1
    }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className={` ${modeParser(mode, false, 'bg')} rounded-lg transition-all duration-200 hover:cursor-pointer`}>
      <p className={`${modeParser(mode, true, 'bg')} ${modeParser(mode, false, 'text')} rounded-md border-2 ${modeParser(mode, false, 'border')} py-2 px-6 2xl:py-3 2xl:px-7 translate-x-[-0.25em] translate-y-[-0.25em] transition-all duration-200 text-sm sm:text-base md:text-lg 2xl:text-2xl font-montserrat font-semibold hover:bg-brand hover:text-light active:translate-x-[0] active:translate-y-[0]`}>
        {idiomParser(idiom, textES, textUS)}
      </p>
    </motion.button>
  )
}

export default Button
