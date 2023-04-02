import { Link } from 'react-router-dom'
import { transition } from '../../App'
import { useAppSelector } from '../../store/store'
import { motion } from 'framer-motion'
import { type PropsCard } from '../../types/types'
import { modeParser } from '../../utils/modeView'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Card = ({ name, imageDark, imageLight, url }: PropsCard) => {
  const mode = useAppSelector(state => state.view.mode)

  return (
    <Link to={url} target='_blank'>
      <motion.div variants={item} className={`${modeParser(mode, false, 'bg')} ${transition} rounded-2xl`}>
        <div className={`flex flex-col items-center justify-center px-6 py-4 sm:px-8 sm:py-6 ${transition} ${modeParser(mode, true, 'bg')} border-2 ${modeParser(mode, false, 'border')} w-32 h-32 sm:w-60 sm:h-60 rounded-2xl hover:translate-x-[-0.4em] hover:translate-y-[-0.4em] active:translate-x-0 active:translate-y-0`}>
          <img className={` h-14 sm:h-[100px] ${transition}`}
          src={mode ? imageDark : imageLight}
          alt='name' />

          <p
          className={`${modeParser(mode, false, 'text')} ${transition} font-montserrat font-bold text-lg sm:text-2xl mt-4 sm:mt-6`}>
            {name}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default Card
