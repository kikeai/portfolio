import javascriptWhite from "../../assets/javascript-logo-negro.svg";
import javascriptBlack from "../../assets/javascript-logo-blanco.svg";
import reactWhite from "../../assets/react-negro.svg";
import reactBlack from "../../assets/react-blanco.svg";
import reduxWhite from "../../assets/redux-negro.svg";
import reduxBlack from "../../assets/redux-blanco.svg";
import nodeWhite from "../../assets/node-negro.svg";
import nodeBlack from "../../assets/node-blanco.svg";
import typescriptWhite from "../../assets/typescript-negro.svg";
import typescriptBlack from "../../assets/typescript-blanco.svg";
import expressWhite from "../../assets/express-negro.svg";
import expressBlack from "../../assets/express-blanco.svg";
import postgresWhite from "../../assets/postgres-negro.svg";
import postgresBlack from "../../assets/postgres-blanco.svg";
import gitWhite from "../../assets/git-negro.svg";
import gitBlack from "../../assets/git-blanco.svg";

export type Technology = {
    id: number
    name: string
    imageLight: string
    imageDark: string
    url: string
}

const techs: Technology[] = [
    {
        id: 1,
        name: "JavaScript",
        imageDark: javascriptBlack,
        imageLight: javascriptWhite,
        url: "https://www.javascript.com/"
    },
    {
        id: 2,
        name: "ReactJS",
        imageDark: reactBlack,
        imageLight: reactWhite,
        url: "https://react.dev/"
    },{
        id: 3,
        name: "Redux",
        imageDark: reduxBlack,
        imageLight: reduxWhite,
        url: "https://redux.js.org/"
    },{
        id: 4,
        name: "NodeJS",
        imageDark: nodeBlack,
        imageLight: nodeWhite,
        url: "https://nodejs.org/en/docs"
    },{
        id: 5,
        name: "TypeScript",
        imageDark: typescriptBlack,
        imageLight: typescriptWhite,
        url: "https://www.typescriptlang.org/"
    },{
        id: 6,
        name: "Express",
        imageDark: expressBlack,
        imageLight: expressWhite,
        url: "https://expressjs.com/"
    },{
        id: 7,
        name: "PostgreSQL",
        imageDark: postgresBlack,
        imageLight: postgresWhite,
        url: "https://www.postgresql.org/docs/"
    },{
        id: 8,
        name: "GIT",
        imageDark: gitBlack,
        imageLight: gitWhite,
        url: "https://git-scm.com/doc"
    },
]

export default techs;