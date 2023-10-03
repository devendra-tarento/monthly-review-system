import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let customConfig: any = {
  autoClose: 2000,
  theme: "dark",
  draggable: false,
  position: toast.POSITION.TOP_CENTER,
  rtl: true,
  hideProgressBar: true,
  closeButton: false,
};

export class Notify {
  static success(message: any) {
    toast.success(message, customConfig);
  }

  static warning(message: any) {
    toast.warn(message, customConfig);
  }

  static error(message: any) {
    toast.error(message, customConfig);
  }

  static info(message: any) {
    toast.info(message, customConfig);
  }
}
