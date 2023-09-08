import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
function ToastMessage({ message, type }) {
  console.log(message);
  useEffect(
    function () {
      if (type === "error") toast.error(message);
      else toast(message);
    },
    [message, type]
  );

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="dark"
    />
  );
}

export default ToastMessage;
