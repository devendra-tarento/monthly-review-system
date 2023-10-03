import styles from "./ModalOne.module.css";
import { Title } from "../headings/Title";
import { Button, ButtonType, ButtonVariant } from "../buttons/Button";

interface ModalOneProps {
  modalId?: string;
  modalLabel: string;
  modalTitle?: string;
  primaryBtnHandler?: (event: any) => void;
  secondaryBtnHandler?: (event: any) => void;
  btnTextPrimary?: string;
  btnTextSecondary?: string;
  chartData?: any;
  renderLeft?: any;
  renderRight?: any;
  isLarge?: boolean;
  showModal?: boolean;
  processingPrimaryBtnHandler?: boolean;
}

export const ModalOne = ({
  modalId,
  modalLabel,
  modalTitle,
  primaryBtnHandler,
  secondaryBtnHandler,
  btnTextPrimary,
  btnTextSecondary,
  renderLeft,
  renderRight,
  isLarge,
  showModal = false,
  processingPrimaryBtnHandler= false,
}: ModalOneProps) => {
  return (
    <>
      <div
      className={`${showModal ? `${styles.show_modal} show` : ""} modal fade`}
      tabIndex={-1}
      id={modalId}
      aria-hidden="true"
      aria-labelledby={modalLabel}
      key={modalId + "key"}
    >
      <div
        className={`${isLarge ? " modal-lg" : "" } modal-dialog modal-dialog-centered  modal-dialog-scrollable`}
      >
        <div className={`${styles.modal_one} modal-content`}>
          <div className="modal-header">
            <div className="modal-title pt-1">
              <Title title={`${modalTitle}`} />
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={secondaryBtnHandler}
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-12">
              <div className="row">
                <div
                  className={
                    isLarge
                      ? "col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
                      : "col-12"
                  }
                >
                  {renderLeft}
                </div>
                {isLarge && (
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mx-0 mx-sm-5 mx-md-5 mx-lg-0 mx-xl-0 mx-xxl-0">
                    {renderRight}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className={`${stylesOne.btn_small} btn`}
              onClick={secondaryBtnHandler}
            >
              {btnTextSecondary || "Cancel"}
            </button> */}
            <Button
                // className={`${stylesOne.btn_small}`}
                type={ButtonType.secondary}
                variant={ButtonVariant.outline}
                onClick={secondaryBtnHandler}
              >
                {(!btnTextSecondary || btnTextSecondary ===  "Cancel") && <span className={`material-icons me-1 valign_sub`}>close</span>}
                {btnTextSecondary || "Cancel"}
            </Button>
            {btnTextPrimary && (
              <div className="" >
                {/* <ButtonSmall
                  btnTxt={btnTextPrimary}
                  showIcon={false}
                  clickHandler={primaryBtnHandler}
                /> */}
                <Button className='w-100' disabled={processingPrimaryBtnHandler} onClick={primaryBtnHandler}> 
                  {processingPrimaryBtnHandler && <span className="spinner-border spinner-border-sm me-3"></span>}{btnTextPrimary}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    {showModal &&  <div className=" modal-backdrop fade show"></div>}
    </>
    );
};
