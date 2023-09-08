/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const spinnerVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      loop: Infinity,
      ease: "linear",
    },
  },
};

function Spinner({ className }) {
  return (
    <motion.div
      className={`partial-circle-spinner ${className}`}
      variants={spinnerVariants}
      initial="initial"
      animate="animate"
    ></motion.div>
  );
}

export default Spinner;
