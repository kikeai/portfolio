import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Fade } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { OpenCloseModal, OpenCloseModalMail } from '../../store/features/popups';
import ButtonModal from './ButtonModal';
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import gmailIcon from "../../assets/Gmail-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import Input from '../../components/input/Input';
import TextArea from '../../components/textArea/TextArea';
import ButtonForm from './ButtonForm';
import emailjs from '@emailjs/browser';
import loader from '../../assets/loader.svg'
import { transition } from '../../App';


interface Form {
  from_name: string
  user_name: string
  user_email: string
  message: string
}

function ChildModal() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.view.mode);
  const idiom = useAppSelector(state => state.view.idiom);
  const open = useAppSelector(state => state.popups.modalMail);
  const [response, setResponse] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<Form>({
    from_name: "Kike Portfolio web",
    user_name: "",
    user_email: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<Form>({
    from_name: "",
    user_name: "",
    user_email: "",
    message: "",
  })
  
  const handleOpen = () => {
    dispatch(OpenCloseModalMail());
    setResponse("");
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

    switch (name) {
      case "user_name":
        setForm({
          ...form,
          [name]: value
        })
        break;
      case "user_email":
        setForm({
          ...form,
          [name]: value
        })
        break;
      default:
        break;
    }
  }

  const handleTextChange:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {value} = e.target;
    setForm({
      ...form,
      message: value
    })
  }

  const handleSubmit:React.MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    emailjs.send('service_7hyegsf', 'template_qz1zomu', {...form}, 'kVa09E7jPyPe-GGdz')
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
    <React.Fragment>
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
            error={false}
            placeholder="Tu Nombre"
            onChange={handleChange}
            />
            <Input 
            input={form.user_email}
            name="user_email"
            error={false}
            placeholder="Tu Email"
            onChange={handleChange}
            />
            <TextArea 
            input={form.message}
            name="message"
            error={false}
            placeholder="Tu Mensaje"
            onChange={handleTextChange}
            />

            <div className={`${loading? "": "hidden"} ${transition}`}>
              <img className='h-7 animate-spin' src={loader} alt="spin" />
            </div>

            <p 
            className={`${response !== ""? "": "hidden"} font-montserrat text-base text-center ${response === "OK"? "text-green-600": "text-red-700"}`}>
              {response === "OK"? resTextOk: resTextBad}
            </p>

            <div className='flex justify-center w-full gap-6'>
              <ButtonForm
              textES='Cerrar'
              textUS='Close'
              type='button'
              onClick={handleOpen}
              />
              <ButtonForm
              textES='Enviar mail'
              textUS='Send mail'
              type='submit'
              onClick={() => {}}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.view.mode);
  const idiom = useAppSelector(state => state.view.idiom);
  const open = useAppSelector(state => state.popups.modal);
  const handleOpen = () => {
    dispatch(OpenCloseModal());
  };

  const styleParent = {
    width: "100%",
    maxWidth: 400,
    bgcolor: mode? '#0D0D0E': '#F4F4F4',
    border: mode? '2px solid #F4F4F4': '2px solid #000',
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

  return (
    <div>
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
        closeAfterTransition
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Fade in={open}>
          <Box sx={{ ...styleParent }}>
            <h2 className={`font-montserrat font-black italic ${mode? "text-light": "text-dark"} text-center text-3xl`} id="parent-modal-title">{idiom === "ES"? 'Contáctame': 'Get in touch'}</h2>
            <ButtonModal 
            icon={whatsappIcon}
            text="WhatsApp"
            textColor='light'
            bgColor='whatsapp'
            borderColor={mode? "light": "dark"}
            onClick={() => {
              window.open("https://wa.me/+584245304075")
              handleOpen()
            }}
            />
            <ButtonModal 
            icon={linkedinIcon}
            text="LinkedIn"
            textColor='light'
            bgColor='linkedin'
            borderColor={mode? "light": "dark"}
            onClick={() => {
              window.open("https://linkedin.com/in/kikeai")
              handleOpen()
            }}
            />
            <ChildModal />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}