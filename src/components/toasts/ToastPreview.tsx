import { ToastContainer } from "react-toastify";
import { ButtonSmallOutline } from "../buttons/ButtonSmallOutline";
import { Notify } from "./Notify";

interface ToastPreviewProps {
  type: string;
}

export const ToastPreview = ({ type }: ToastPreviewProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();

    switch (type) {
      case "success":
        Notify.success("Toast message!");
        break;
      case "error":
        Notify.error("Toast message!");
        break;
      case "warning":
        Notify.warning("Toast message!");
        break;
      case "info":
        Notify.info("Toast message!");
        break;
      default:
        return null;
    }
  };
  return (
    <div className="col-12">
      <ToastContainer />
      <ButtonSmallOutline
        btnTxt="Show toast!"
        showIcon={false}
        clickHandler={handleClick}
      />
    </div>
  );
};
