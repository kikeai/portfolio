import { type PropsImageButton } from '../../../types/typeButtons'

const SmallButton = ({ onClick, image }: PropsImageButton) => {
  return (
        <button
        onClick={onClick}
        className='bg-dark rounded-full transition-all duration-200 hover:cursor-pointer'>
            <img className='bg-light text-dark rounded-full  border-2 border-dark translate-x-[-0.20em] translate-y-[-0.20em] transition-all duration-200 hover:text-light active:translate-x-[0] active:translate-y-[0]'
            src={image}
            alt='red' />
        </button>
  )
}

export default SmallButton
