import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
//icons
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ isOpen }) => (
  <div className="ul-menu-navigation">
    <motion.ul variants={variants} style={isOpen ? null : { display: "none" }}>
      {Menu.map((item, i) => (
        <MenuItem i={i} key={i} item={item} />
      ))}
    </motion.ul>
  </div>


);

const Menu = [
  {
    title: 'Inicio', path: '/inicio', icon: <HomeIcon />
  },
  {
    title: 'Mi Quiniela', path: '/mi-quiniela', icon: <SportsSoccerIcon />
  },
  {
    title: 'Mi Quiniela', path: '/mi-quiniela', icon: <SportsSoccerIcon />
  },
  {
    title: 'Mi Quiniela', path: '/mi-quiniela', icon: <SportsSoccerIcon />
  },
  {
    title: 'Logout', path: '/login', icon: <LogoutIcon />
  },
];