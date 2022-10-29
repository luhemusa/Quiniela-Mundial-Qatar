import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-cases/use-dimensions";
import { MenuToggle } from "../../components/MenuToggle";
import { Navigation } from "../../components/Navigation";
import { data } from "../../data"
import qatar from "../../assets/img/qatar2022.png"
import { useGetPuntos } from "./use-cases/useGetPuntos";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Home = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const [puntos , getPuntos] = useGetPuntos()

  useEffect(() => {
    if(!user){
      navigate('/login');
    }
    getPuntos(user.id)
  },[])

  console.log("puntos: ", puntos)


  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={isOpen ? null : { width: '50px' }}
      >
        
        <motion.div className="background" variants={sidebar} />
        <Navigation isOpen={isOpen} puntos={puntos}/>
        <MenuToggle toggle={() => toggleOpen()} />

      </motion.nav>
      <div className="header-home">
        <img src="https://aquacristalina.com/wp-content/uploads/2021/05/cropped-cropped-logopc-1-284x195.png" alt="logo cristalina" width="30%" />
      </div>
      <div >
        <Outlet />
      </div>
      <br />
      <div className="footer-home">
        <img src={qatar} alt="logo cristalina" width="15%" />
      </div>
    </div>
  );
}

export default Home;