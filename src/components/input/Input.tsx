import { transition } from '../../App'
import { type PropsInput } from '../../types/types'

const Input = ({ name, input, placeholder, error, onChange }: PropsInput) => {
  return (
    <div className={`${error ? 'bg-red-700' : 'bg-dark'} w-full ${transition} rounded-md`}>
      <input
      className={`outline-none border-2 ${error ? 'border-red-700' : 'border-dark'} ${transition} w-full font-montserrat font-medium pl-2 py-2 rounded-md focus:translate-x-[-0.20em] focus:translate-y-[-0.20em] [&:not(:placeholder-shown)]:translate-y-[-0.20em] [&:not(:placeholder-shown)]:translate-x-[-0.20em]`}
      placeholder={placeholder}
      name={name}
      value={input}
      onChange={onChange}
      type='text'
      />
    </div>
  )
}

export default Input
