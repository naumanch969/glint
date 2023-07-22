import { Navbar } from './components'
import { Header, About, Services, Work, Footer, Clients, Contact } from './pages'
import { Menu, North } from "@mui/icons-material"
import { useState, useEffect } from 'react'
import { Link } from "react-scroll"


const App = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  };


  return (
    <div className=" min-w-screen min-h-screen flex flex-col font-cursive   bg-black text-white  ">




      <div style={{ transition: 'all 0.5s linear' }} className={` 
          ${scrolled && 'bg-black'} rounded-[4px] z-50 px-[10px] py-[4px]
          flex justify-between items-center gap-[1rem] fixed
          right-[20px] top-[30px] 
          sm:right-[20px] sm:top-[30px] 
          md:right-[64px] md:top-[2rem] 
        `} >
        <p className={`text-green text-[24px] `} >Menu</p>
        <button onClick={() => setShowNavbar(pre => !pre)} className="flex flex-col justify-between items-center gap-[8px] " >
          <Menu />
        </button>
      </div>





      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Header />
      <About />
      <Services />
      <Work />
      <Clients />
      <Contact />
      <Footer />

      {
        scrolled &&
        <Link
          id="link"
          to='home'
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={1000}
          className="p-[1rem] cursor-pointer bg-darkGray fixed right-[1rem] bottom-[1rem] w-fit z-[50] "
        >
          <North className="text-textGray " />
        </Link>
      }


    </div >
  );

};

export default App;
