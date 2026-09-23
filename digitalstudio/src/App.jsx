import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./layout/user/Header"
import Footer from "./layout/user/Footer"
import UserLayout from "./layout/user/UserLayout"
import Home from "./components/user/Home"
import Contact from "./components/user/Contact"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import About from "./components/user/About"



import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

   useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("preloader")?.classList.add("loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <BrowserRouter>
       <Routes>
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/about" element={<About />}></Route>
    
  </Route>
</Routes>
      </BrowserRouter>
    </>
  )
}

export default App