import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 10 },
}

const DivMotionFade = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default DivMotionFade