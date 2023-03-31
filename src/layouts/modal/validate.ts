import { type Form } from './ModalChild'
const nameRegex = /^[a-zA-Z\s]*$/
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const validate = (inputs: Form, idiom: string) => {
  const errors: Form = {
    from_name: '',
    user_name: '',
    user_email: '',
    message: ''
  }
  const translate = (x: string, y: string) => {
    return idiom === 'ES' ? x : y
  }

  //  VALIDATIONS USER_NAME
  if (!nameRegex.test(inputs.user_name)) errors.user_name = translate('*No números o caracteres especiales', '*No numbers or special characters')
  if (inputs.user_name.length > 50) errors.user_name = translate('*Máximo 50 letras', '*Max 50 letters')
  if (inputs.user_name.length < 4) errors.user_name = translate('*Mínimo 4 letras', '*Minimum 4 letters')
  if (inputs.user_name === '') errors.user_name = ''

  //  VALIDATIONS USER_EMAIL
  if (!emailRegex.test(inputs.user_email)) errors.user_email = translate('*Ingresa un mail valido', '*Enter a valid email')
  if (inputs.user_email.length > 50) errors.user_email = errors.user_name = translate('*Máximo 50 caracteres', '*Max 50 characters')
  if (inputs.user_email.length < 10) errors.user_email = translate('*Mínimo 10 caracteres', '*Minimum 10 characters')
  if (inputs.user_email === '') errors.user_email = ''

  //  VALIDATIONS MESSAGE
  if (inputs.message.length > 800) errors.message = translate('*Máximo 800 caracteres', '*Max 800 characters')
  if (inputs.message.length < 20) errors.message = translate('*Mínimo 20 caracteres', '*Minimum 20 characters')
  if (inputs.message === '') errors.message = ''

  return errors
}

export default validate
