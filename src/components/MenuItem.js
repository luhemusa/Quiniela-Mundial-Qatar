import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ i, item }) => {

  const navigate = useNavigate()

  const NavigateTo = () => {
    if(item.title === 'Logout'){
      window.localStorage.removeItem('user');
      console.log(item.path)
      navigate(item.path)
    }else{
      console.log(item.path)
      navigate(item.path)
    }
    
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="menu-item">
        {item.icon}
        <p style={{ marginLeft: '10px' }} onClick={ NavigateTo }>{item.title}</p>
      </div>

    </motion.li>
  );
};
