export interface PropsButtonSection {
  icon: string
  text: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export interface PropsImageButton {
  image: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface PropsButton {
  textES: string
  textUS: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface PropsUrlButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface PropsButtonForm {
  type: 'button' | 'submit'
  textES: string
  textUS: string
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface PropsButtonModal {
  icon: string
  bgColor: string
  borderColor: string
  textColor: string
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
