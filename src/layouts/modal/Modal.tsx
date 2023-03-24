import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Fade } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { OpenCloseModal, OpenCloseModalMail } from '../../store/features/popups';
import ButtonModal from './ButtonModal';
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import gmailIcon from "../../assets/Gmail-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.view.mode);
  const idiom = useAppSelector(state => state.view.idiom);
  const open = useAppSelector(state => state.popups.modalMail)
  const handleOpen = () => {
    dispatch(OpenCloseModalMail())
  };


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
        open={open}
        onClose={handleOpen}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleOpen}>Close Child Modal</Button>
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