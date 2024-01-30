import { Alert, Snackbar } from "@mui/material";
import { Navbar, OTPModal } from "./components";
import {
  Header,
  About,
  Services,
  Work,
  Footer,
  Clients,
  Contact,
} from "./pages";
import { Menu, North } from "@mui/icons-material";
import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const App = () => {
  ///////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////
  const { scrollYProgress } = useScroll(); // return value b/w 0 to 1
  const scaleX = useSpring(scrollYProgress);
  const sectionRef = useRef(null);

  ///////////////////////////////////////////// STATES //////////////////////////////////////////////////
  const [showNavbar, setShowNavbar] = useState(false);
  const [showAlertTopbar, setShowAlertTopbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [otpFormType, setOtpFormType] = useState("");
  const [openOTPModal, setOpenOTPModal] = useState(false);

  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  ///////////////////////////////////////////// USE EFFECT //////////////////////////////////////////////////

  // useEffect(() => {
  //   window.addEventListener('mousemove', function (e) {
  //     const posX = e.clientX;
  //     const posY = e.clientY;

  //     if (cursorDotRef.current && cursorOutlineRef.current) {
  //       // Use type assertions here
  //       cursorDotRef.current.style.left = posX + 'px';
  //       cursorDotRef.current.style.top = posY + 'px';

  //       cursorOutlineRef.current.style.left = posX + 'px';
  //       cursorOutlineRef.current.style.top = posY + 'px';

  //       // The animate method is not directly available on HTMLElement
  //       // Use `animate` from the Animation API
  //       cursorOutlineRef.current.animate(
  //         [{ left: `${posX}px`, top: `${posY}px` }],
  //         { duration: 1000, fill: 'forwards' }
  //       );
  //     }

  //     return () => {
  //       window.removeEventListener('mousemove', () => { });
  //     };
  //   });
  // }, [])
  // useEffect(() => {
  //   if (sectionRef.current) {
  //     VanillaTilt.init(sectionRef.current, {
  //       max: 25,
  //       speed: 400,
  //       glare: true,
  //       'max-glare': 0.5,
  //     });

  //     return () => {
  //       sectionRef.current?.vanillaTilt?.destroy(); // Cleanup on component unmount
  //     }
  //   }
  // }, []);

  ///////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight + 2) {
      // if window scrolled to 200vh + 2px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-w-screen min-h-screen flex flex-col font-cursivebg-black text-white  "
    >
      <OTPModal
        otpFormType={otpFormType}
        open={openOTPModal}
        setOpen={setOpenOTPModal}
        setShowAlertTopbar={setShowAlertTopbar}
      />

      {/* Alert Topbar - Will be opened if user close the auth modal */}
      <Snackbar
        open={showAlertTopbar}
        onClose={() => {}}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="warning"
          sx={{ cursor: "pointer" }}
          onClick={() => setOpenOTPModal(true)}
        >
          Your submission is not completed yet. Click to complete it.
        </Alert>
      </Snackbar>

      <motion.div
        style={{ scaleX: scaleX }}
        className="bg-white sticky top-0 w-screen h-[5px] border border-black origin-left z-[100] rounded-full "
      />

      <div
        style={{ transition: "all 0.5s linear" }}
        className={`${
          scrolled && "bg-black"
        } rounded-[4px] z-50 px-[10px] py-[4px] flex justify-between items-center gap-[1rem] fixed right-[20px] top-[30px]  sm:right-[20px] sm:top-[30px]  md:right-[64px] md:top-[2rem] `}
      >
        <p className={`text-green text-[24px] `}>Menu</p>
        <button
          onClick={() => setShowNavbar((pre) => !pre)}
          className="flex flex-col justify-between items-center gap-[8px] "
        >
          <Menu />
        </button>
      </div>

      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Header />
      <About />
      <Services />
      <Work />
      <Clients />
      <Contact
        setOpenOTPModal={setOpenOTPModal}
        setOtpFormType={setOtpFormType}
      />
      <Footer
        setOpenOTPModal={setOpenOTPModal}
        setOtpFormType={setOtpFormType}
      />

      {scrolled && (
        <Link
          id="link"
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={1000}
          className="p-[1rem] cursor-pointer bg-darkGray fixed right-[1rem] bottom-[1rem] w-fit z-[50] "
        >
          <North className="text-textGray " />
        </Link>
      )}
    </div>
  );
};

export default App;
