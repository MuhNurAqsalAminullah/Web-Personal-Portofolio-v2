import imgBirich1 from "../assets/image/birich1.jpg";
import imgBirich2 from "../assets/image/birich2.jpg";
import imgBirich3 from "../assets/image/birich3.jpg";
import imgBirich4 from "../assets/image/birich4.jpg";
import imgZonaEnglish1 from "../assets/image/zonaEnglish.jpg";
import imgZonaEnglish2 from "../assets/image/zonaEnglish1.jpg";
import imgZonaEnglish3 from "../assets/image/zonaEnglish2.jpg";
import imgZonaEnglish4 from "../assets/image/zonaEnglish3.jpg";
import imgZonaEnglish5 from "../assets/image/zonaEnglish4.jpg";
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
    title: "berich premium",
    // desc: "Berich Premium adalah sebuah web aplikasi yang berjenis Multi Level Marketing yang di mana adalah sebuah aplikasi yang dapat membantu sebuah bisnis untuk mengatasi komplesitas pemasaran multi level dalam waktu singkat.",
    description: {
      en: "Berich Premium is a web application that is a type of Multi Level Marketing where it is an application that can help a business to overcome the complexity of multi-level marketing in a short time.",
      id: "Berich Premium adalah sebuah web aplikasi yang berjenis Multi Level Marketing yang di mana adalah sebuah aplikasi yang dapat membantu sebuah bisnis untuk mengatasi komplesitas pemasaran multi level dalam waktu singkat.",
    },
    urlGithub: "",
    urlDemo: "",
    image: [
      {
        id: 1,
        img: imgBirich1,
      },
      {
        id: 2,
        img: imgBirich2,
      },
      {
        id: 3,
        img: imgBirich3,
      },
      {
        id: 4,
        img: imgBirich4,
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
        id: 3,
        title: "MUI/Core",
      },
    ],
  },
  {
    id: 2,
    title: "zonaenglish",
    // desc: "ZonaEnglish adalah sebuah web landing page yang bertemakan pendidikan dengan memberikan sebuah informasikan sebuah aplikasi untuk kursus belajar berbahasa inggris dengan mengenalkan fitur-fitur yang tersedia pada aplikasi tersebut beberapa informasi lainya.",
    description: {
      en: "ZonaEnglish is a web landing page that focuses on education by providing an informing application for English language courses by introducing the features available on the application some other information.",
      id: "ZonaEnglish adalah sebuah web landing page yang bertemakan pendidikan dengan memberikan sebuah informasikan sebuah aplikasi untuk kursus belajar berbahasa inggris dengan mengenalkan fitur-fitur yang tersedia pada aplikasi tersebut beberapa informasi lainya.",
    },
    urlGithub: "https://github.com/MuhNurAqsalAminullah/ZonaEnglish",
    urlDemo: "",
    image: [
      {
        id: 1,
        img: imgZonaEnglish1,
      },
      {
        id: 2,
        img: imgZonaEnglish2,
      },
      {
        id: 3,
        img: imgZonaEnglish3,
      },
      {
        id: 4,
        img: imgZonaEnglish4,
      },
      {
        id: 5,
        img: imgZonaEnglish5,
      },
    ],
    skills: [
      {
        id: 1,
        title: "react js",
      },
      {
        id: 2,
        title: "css",
      },
    ],
  },
  {
    id: 3,
    title: "warehousing dashboard",
    // desc: "Warehousing Dashboard adalah sebuah aplikasi website dashboard untuk mengelola sebuah barang barang produk dalam sebuah pergudangan.",
    description: {
      en: "Warehousing Dashboard is a dashboard website application to manage a product goods in a warehouse.",
      id: "Warehousing Dashboard adalah sebuah aplikasi website dashboard untuk mengelola sebuah barang barang produk dalam sebuah pergudangan.",
    },
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
    id: 4,
    title: "Restonyam",
    // desc: "Projek ini adalah sebuah submission final yang di berikan olah dicoding dalam modul pembelajarannya yang berjudul 'Menjadi Frontend Web Developer Expert' agar dapat lulus di kelas tersebut.",
    description: {
      en: "Retonyam is a final submission project that gets coded in its learning module entitled 'Being a Frontend Web Developer Expert' in order to graduate in the class.",
      id: "Retonyam adalah sebuah proyek submission final yang di berikan olah dicoding dalam modul pembelajarannya yang berjudul 'Menjadi Frontend Web Developer Expert' agar dapat lulus di kelas tersebut.",
    },
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
    id: 5,
    title: "street coffee",
    // desc: "Street coffee adalah sebuah wabsite marketing dimana menampilkan semua produknya dan dapat melakukan pembelian dan pembayaran secara langsung pada website tersebut.",
    description: {
      en: "Street coffee is a marketing wabsite that displays all its products and can make purchases and payments directly on the website.",
      id: "Street coffee adalah sebuah wabsite marketing dimana menampilkan semua produknya dan dapat melakukan pembelian dan pembayaran secara langsung pada website tersebut.",
    },
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
    id: 6,
    title: "Vision Capital",
    // desc: "vision capital adalah sebuah website landing pages company profile dimana website ini menjelaskan secara umum sebuah perusahaan atau instansi agar orang awam bisa mencari tahu tentang perusahaan atau instansi tersebut.",
    description: {
      en: "vision capital is a website landing pages company profile where this website generally describes a company or agency so that the public can find out about the company or the agency.",
      id: "vision capital adalah sebuah website landing pages company profile dimana website ini menjelaskan secara umum sebuah perusahaan atau instansi agar orang awam bisa mencari tahu tentang perusahaan atau instansi tersebut.",
    },
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
