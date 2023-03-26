import React, { useEffect, useState } from "react";
import { OpenCloseModalMail } from "../../store/features/popups";
import { useAppDispatch, useAppSelector } from "../../store/store";
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ButtonModal from "./ButtonModal";
import Input from "../../components/input/Input";
import TextArea from "../../components/textArea/TextArea";
import ButtonForm from "./ButtonForm";
import { transition } from "../../App";
import loader from '../../assets/loader.svg';
import gmailIcon from "../../assets/Gmail-icon.svg";
import validate from "./validate";


export interface Form {
  from_name: string
  user_name: string
  user_email: string
  message: string
}

export default function ChildModal() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.view.mode);
  const idiom = useAppSelector(state => state.view.idiom);
  const open = useAppSelector(state => state.popups.modalMail);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    from_name: "Kike Portfolio web",
    user_name: "",
    user_email: "",
    message: "",
  })

  const [errors, setErrors] = useState<Form>({
    from_name: "",
    user_name: "",
    user_email: "",
    message: "",
  })

  const [messageAl, setMessageAl] = useState<string>("");
  
  const handleOpen = () => {
    dispatch(OpenCloseModalMail());
    setResponse("");
    setMessageAl("");
  };

  const styleChild = {
    width: "100%",
    maxWidth: 400,
    bgcolor: '#F4F4F4',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 5,
    px: 5,
    pb: 5,
    paddingX: "1.25em", 
    display: "flex", 
    flexDirection: "column", 
    gap: 3,
    borderRadius: 4,
  };

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {value, name} = e.target;
    setMessageAl("");
    setResponse("");

    setForm({
      ...form,
      [name]: value
    })
    setErrors(validate({ ...form, [name]: value }, idiom))
    
  }

  const handleTextChange:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {value} = e.target;
    setMessageAl("");
    setResponse("");

    setForm({
      ...form,
      message: value
    })
    setErrors(validate({
      ...form,
      message: value
    }, idiom))
  }

  const handleSubmit:React.MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
  
    emailjs.send('service_7hyegsf', 'template_qz1zomu', {...form,
        user_name: form.user_name.trim(),
        user_email: form.user_email.trim(),
        message: form.message.trim(),
    }, 'kVa09E7jPyPe-GGdz')
      .then((result) => {
            setLoading(false);
            setResponse(result.text);
            setForm({
              ...form,
              user_name: "",
              user_email: "",
              message: ""
            })
      })
      .catch((error) => {
            setLoading(false);
            setResponse(error.text);
      })

  }

  let resTextOk = idiom === "ES"? "*Se envió correctamente": "*It was sent correctly";
  let resTextBad = idiom === "ES"? "*No se pudo enviar(Vuelve a intentar)": "*It could not send(Try again)"

  return (
    <div>
      <ButtonModal 
          icon={gmailIcon}
          text={idiom === "ES"? "Enviar mail": "Send Mail"}
          textColor={mode? 'light': 'dark'}
          bgColor={mode? 'dark': 'light'}
          borderColor={mode? "light": "dark"}
          onClick={handleOpen}
          />
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode?"rgba(244, 244, 244, 0.2)": "rgba(14, 14, 14, 0.3)", 
          backdropFilter: "blur(5px)",
          pl: 5,
          pr: 5
        }}
        open={open}
        onClose={handleOpen}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...styleChild }}>
          <h2 className='font-montserrat font-black italic "text-dark" text-center text-2xl md:text-3xl' id="child-modal-title">
            {idiom === "ES"? "Redacta un mail": "Write an email"}
          </h2>
          <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit}>
            <Input 
            input={form.user_name}
            name="user_name"
            error={errors.user_name !== ""}
            placeholder="Tu Nombre"
            onChange={handleChange}
            />
            <p 
            className={`${errors.user_name !== ""? "": "hidden"} font-montserrat text-xs font-medium -mt-4 text-red-700`}>
              {errors.user_name}
            </p>
            <Input 
            input={form.user_email}
            name="user_email"
            error={errors.user_email !== ""}
            placeholder="Tu Email"
            onChange={handleChange}
            />
            <p 
            className={`${errors.user_email !== ""? "": "hidden"} font-montserrat text-xs font-medium -mt-4 text-red-700`}>
              {errors.user_email}
            </p>
            <TextArea 
            input={form.message}
            name="message"
            error={errors.message !== ""}
            placeholder="Tu Mensaje"
            onChange={handleTextChange}
            />
            <p 
            className={`${errors.message !== ""? "": "hidden"} font-montserrat text-xs font-medium -mt-4 text-red-700`}>
              {errors.message}
            </p>

            <div className={`${loading? "": "hidden"} ${transition}`}>
              <img className='h-7 animate-spin' src={loader} alt="spin" />
            </div>

            <p 
            className={`${messageAl !== ""? "": "hidden"} font-montserrat text-base text-center text-red-700`}>
              {messageAl === "OK"? idiom === "ES"? "*Llena todos los campos": "*fill all the fields": idiom === "ES"? "*Corrige los Errores": "*Correct the mistakes"}
            </p>

            <p 
            className={`${response !== ""? "": "hidden"} font-montserrat text-base text-center ${response === "OK"? "text-green-600": "text-red-700"}`}>
              {response === "OK"? resTextOk: resTextBad}
            </p>

            <div className='flex justify-center w-full gap-6'>
              <ButtonForm
              disabled={false}
              textES='Cerrar'
              textUS='Close'
              type='button'
              onClick={handleOpen}
              />
              <ButtonForm
              disabled={false}
              textES='Enviar mail'
              textUS='Send mail'
              type='submit'
              onClick={() => {}}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}