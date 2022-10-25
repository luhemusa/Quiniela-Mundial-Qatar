import { Link, Outlet } from "react-router-dom"
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-cases/use-dimensions";
import { MenuToggle } from "../../components/MenuToggle";
import { Navigation } from "../../components/Navigation";
import { data } from "../../data"
import qatar from "../../assets/img/qatar2022.png"


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
        <Navigation isOpen={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />

      </motion.nav>
      <div className="header-home">
        <img src="http://gfnypanama.com/wp-content/uploads/2018/09/LOGO-CRISTALINA-PNG-HI.png" alt="logo cristalina" width="25%" />
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