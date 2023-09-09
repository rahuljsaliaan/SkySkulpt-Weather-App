import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="bg-blue-800 rounded-full p-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Your loading icon or animation */}
        <div className="w-16 h-16 border-t-8 border-b-8 border-cyan-400 rounded-full animate-spin"></div>
      </motion.div>
    </div>
  );
}

export default Loading;
