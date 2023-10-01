import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <motion.div
        className="rounded-full bg-blue-800 p-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Your loading icon or animation */}
        <div className="h-16 w-16 animate-spin rounded-full border-b-8 border-t-8 border-cyan-400"></div>
      </motion.div>
    </div>
  );
}

export default Loading;
