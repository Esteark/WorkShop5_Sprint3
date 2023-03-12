import StartToastifyInstance from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";

export const showNotification = (mensaje) => {
  StartToastifyInstance({
    text: `${mensaje}`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #fe164e, #fe164e)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
