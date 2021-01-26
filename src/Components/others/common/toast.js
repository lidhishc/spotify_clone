import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const toastMessgse = (message) => {
    toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

}

export default toastMessgse;