import linkedin from "../../assets/linkedin-boton.svg";
import github from "../../assets/github-boton.svg";
import twitter from "../../assets/twitter-boton.svg";
import instagram from "../../assets/instagram-boton.svg";

export const socials = [
    {
        id: 1,
        image: linkedin,
        redirect: () => {window.open("https://www.linkedin.com/in/kikeai/")}
    },
    {
        id: 2,
        image: github,
        redirect: () => {window.open("https://github.com/kikeai")}
    },
    {
        id: 3,
        image: twitter,
        redirect: () => {window.open("https://twitter.com/KIKEill")}
    },
    {
        id: 4,
        image: instagram,
        redirect: () => {window.open("https://www.instagram.com/kike.ai/")}
    },
]