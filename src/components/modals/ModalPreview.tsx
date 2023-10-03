import { ButtonSmall } from "../buttons/ButtonSmall";
import { ModalOne } from "./ModalOne";

interface ModalPreviewProps {
  modalId: string;
  modalLabel: string;
}

export const ModalPreview = ({ modalId, modalLabel }: ModalPreviewProps) => {
  return (
    <div className="col-12">
      <ButtonSmall
        btnTxt="Open modal"
        showIcon={false}
        isModal={true}
        modalId={modalId}
      />
      <ModalOne
        modalId={modalId}
        modalLabel={`${modalId}Label`}
        modalTitle={"Add visualization"}
        btnTextPrimary="Save"
        isLarge={true}
      />
    </div>
  );
};
