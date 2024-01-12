import imgNotes1 from "../assets/image/notes1.jpg";
import imgNotes2 from "../assets/image/notes2.jpg";
import imgNotes3 from "../assets/image/notes3.jpg";
import imgdash1 from "../assets/image/dash.jpg";
import imgdash2 from "../assets/image/dash1.jpg";
import imgdash3 from "../assets/image/dash2.jpg";
import imgdash4 from "../assets/image/dash3.jpg";
import imgDicoding1 from "../assets/image/dicoding1.jpg";
import imgDicoding2 from "../assets/image/dicoding2.jpg";
import imgWarkop from "../assets/image/warungKopi.jpg";
import imgComprof from "../assets/image/companyProfile.jpg";

const personalPortfolio = [
  {
    id: 1,
    title: "notes App CRUD API",
    urlGithub: "https://github.com/MuhNurAqsalAminullah/app-notes",
    urlDemo: "https://app-note-prod.netlify.app/",
    image: [
      {
        id: 1,
        img: imgNotes1,
      },
      {
        id: 2,
        img: imgNotes2,
      },
      {
        id: 3,
        img: imgNotes3,
      },
    ],
    skills: [
      {
        id: 1,
        title: "reactjs",
      },
      {
        id: 2,
        title: "redux toolkit",
      },
      {
        id: 3,
        title: "CRUD",
      },
      {
        id: 4,
        title: "supabase",
      },
    ],
  },
  {
    id: 2,
    title: "warehousing dashboard",
    urlGithub: "https://github.com/MuhNurAqsalAminullah/Warehouse-Dashboard",
    urlDemo: "",
    image: [
      {
        id: 1,
        img: imgdash1,
      },
      {
        id: 2,
        img: imgdash2,
      },
      {
        id: 3,
        img: imgdash3,
      },
      {
        id: 4,
        img: imgdash4,
      },
    ],
    skills: [
      {
        id: 1,
        title: "reactjs",
      },
      {
        id: 2,
        title: "tailwindcss",
      },
      {
        id: 4,
        title: "expressjs",
      },
      {
        id: 5,
        title: "sequalize",
      },
      {
        id: 6,
        title: "mysql",
      },
    ],
  },
  {
    id: 3,
    title: "final subbmission dicoding frontend expert",
    urlGithub:
      "https://github.com/MuhNurAqsalAminullah/Submission-Dicoding-Menjadi-Front-End-Web-Developer-Expert",
    urlDemo: "https://restonyam.netlify.app/",
    image: [
      {
        id: 1,
        img: imgDicoding1,
      },
      {
        id: 2,
        img: imgDicoding2,
      },
    ],
    skills: [
      {
        id: 1,
        title: "javascript",
      },
      {
        id: 2,
        title: "css",
      },
      {
        id: 3,
        title: "webpack",
      },
      {
        id: 4,
        title: "API",
      },
    ],
  },
  {
    id: 4,
    title: "landing page street coffee",
    urlGithub: "https://github.com/MuhNurAqsalAminullah/warung-kopi",
    urlDemo: "https://street-kopi.netlify.app/",
    image: [
      {
        id: 1,
        img: imgWarkop,
      },
    ],
    skills: [
      {
        id: 1,
        title: "reactjs",
      },
      {
        id: 2,
        title: "tailwindcss",
      },
    ],
  },
  {
    id: 5,
    title: "landing page company profile",
    urlGithub:
      "https://github.com/MuhNurAqsalAminullah/Company-Profile-Example",
    urlDemo: "https://company-profile-peach.vercel.app/",
    image: [
      {
        id: 1,
        img: imgComprof,
      },
    ],
    skills: [
      {
        id: 1,
        title: "reactjs",
      },
      {
        id: 2,
        title: "tailwindcss",
      },
    ],
  },
];

export default personalPortfolio;
