import smashPic from "../img/smash.png"
import book from "../img/book.png"
import book2 from "../img/book2.png"
import work from "../img/work.png"
import novel from "../img/novel.png";
import sc from "../img/selfcare.png";


export const cards = [
    {
        title: "Education",
        description: 'I completed three years of a Bachelor of Computer Science program at European University, where I developed a strong foundation in computer science principles and problem-solving skills, despite not finishing the degree. Subsequently, I pursued further studies at Cyprus College, where I completed a two-year program and earned a Diploma in Information Technology.',
        image: book2,
        color: '#d9eccf'
        // color: '#BBACAF'
    },
    {
        title: "Current Occupation ",
        description: 'Am currently a co-owner of Peter Computers. Our shop  provides sales of Computers / Smartphones / other electronics as well as external IT support, for individuals and Companies. We are also a Cyta partner and provide all the Cyta contracts and offers',
        image: work,
        color: '#f9e2cd'
        // color: '#977F6D'
    },
    {
        title: "Front-End development",
        description: 'With basic education, multiple courses and alot of hours smashing the keyboard, I have intermediate knowladge and experience with Front-end and some Back-end frameworks and libraries. That include : React.js, Next.js, HTML/CS and more.',
        image: smashPic,
        color: '#e5dcea'
        // color: '#C2491D'
    },
]

//  Since then i have completed multiple front-end development courses which includes: Javascript / Next.js / React.js / Wordpress



export const skillz = [
    {
        skill: 'HTML/CSS',
        lvl: 'Advanced'
    },
    {
        skill: 'JavaScript',
        lvl: 'Intermediate'
    },
    {
        skill: 'TailwindCss',
        lvl: 'Intermediate'
    },
    {
        skill: 'React.js',
        lvl: 'Intermediate'
    },
    {
        skill: 'Next.js',
        lvl: 'Intermediate'
    },
    {
        skill: 'Git',
        lvl: 'Basics'
    },
    {
        skill: 'WordPress',
        lvl: 'Basics'
    },
    {
        skill: 'IT Technitian ',
        lvl: 'Advanced'
    },
    {
        skill: 'Sales ',
        lvl: 'Advanced'
    },
]


export const ProjectsImport = [
    {
        title: "The Novel Yard",
        img: novel,
        description:
            "The Novel Yard is a real life project of a content view website where visitors can observe a large venue gallery, find out more information about the venue, and get in contact with the owner. As requested from the client",
        tools: ["HTML", "CSS", "Javascript"],
        link: "https://thenovelyard.com.cy/",
    },
    {
        title: "Self Care - SPA",
        img: sc,
        description:
            "Self Care is a fully responsive, Single Page Application with aim on showcasing an artistic style e-commerce front-end design",
        tools: ["React.js", "CSS"],
        link: "https://petriscy.github.io/SelfCareProjectLive/",
    },
    {
        title: "In Progress/Uploading Soon",
        img: novel,
        description: "In Progress",
        tools: ["React.js", "Tailwindcss"],
        link: "_",
    },
];
