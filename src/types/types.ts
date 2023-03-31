export interface View {
  idiom: string
  mode: boolean
}

export interface Popups {
  sidepanel: boolean
  contact: boolean
  modal: boolean
  modalMail: boolean
}

export interface LabelType {
  textUS: string
  textES: string
}

export interface PropsLabel {
  labels: LabelType[]
}

export interface Technology {
  id: number
  name: string
  imageLight: string
  imageDark: string
  url: string
}

export interface Socials {
  id: number
  image: string
  redirect: () => void
}

export interface Form {
  from_name: string
  user_name: string
  user_email: string
  message: string
}

export interface PropsCard {
  name: string
  imageLight: string
  imageDark: string
  url: string
}

export interface PropsInput {
  name: string
  input: string
  placeholder: string
  error: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface PropsProject {
  image: string
  title: string
  descriptionES: string
  descriptionUS: string
  url: React.MouseEventHandler<HTMLButtonElement>
  reverse: boolean
}

export interface PropsTextArea {
  name: string
  input: string
  placeholder: string
  error: boolean
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}
