import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
//icons
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const user = JSON.parse(localStorage.getItem('user'))

export const Navigation = ({ isOpen, puntos }) => (
  <div className="ul-menu-navigation">
    <motion.ul variants={variants} style={isOpen ? null : { display: "none" }}>

      <div style={{ textAlign: 'center' }}>
        <AccountCircleIcon sx={{ fontSize: '100px', color: '#d2d2d2' }} />
      </div>
      <p style={{ color: '#757575', textAlign: 'center', fontSize: '20px' }}>{user.name}</p>
      <p style={{ color: '#757575', textAlign: 'center', marginTop: '-10px' }}><b>Puntos acumulados: {puntos}</b></p>
      <br /><br />

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
    title: 'Mis Resultados', path: '/mi-quiniela', icon: <SportsSoccerIcon />
  },
  {
    title: 'Logout', path: '/login', icon: <LogoutIcon />
  },
];