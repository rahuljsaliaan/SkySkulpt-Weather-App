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

function Spinner({ size = "12" }) {
  return (
    <motion.div
      className={`w-${size} aspect-square border-t-8 border-b-8 border-white rounded-full`}
      variants={spinnerVariants}
      initial="initial"
      animate="animate"
    ></motion.div>
  );
}

export default Spinner;
