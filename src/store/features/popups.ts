import { createSlice } from '@reduxjs/toolkit'
import { type popups } from '../../types/types'

const initialState: popups = {
  sidepanel: false,
  contact: false,
  modal: false,
  modalMail: false
}

export const PopupsSlice = createSlice({
  name: 'vista',
  initialState,
  reducers: {
    OpenCloseSidePanel: (state) => {
      state.sidepanel ? state.sidepanel = false : state.sidepanel = true
    },
    OpenCloseContact: (state) => {
      state.contact ? state.contact = false : state.contact = true
    },
    OpenCloseModal: (state) => {
      state.modal ? state.modal = false : state.modal = true
    },
    OpenCloseModalMail: (state) => {
      state.modalMail ? state.modalMail = false : state.modalMail = true
    }
  }
})

export default PopupsSlice.reducer
export const { OpenCloseSidePanel, OpenCloseContact, OpenCloseModal, OpenCloseModalMail } = PopupsSlice.actions
