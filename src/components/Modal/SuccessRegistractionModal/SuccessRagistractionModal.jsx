import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import authOperations from "redux/auth/authOperations";
//import { selectUser } from "../../../redux/auth/selectors";
import s from "../SuccessRegistractionModal/SuccessRegistractionModal.module.scss";
import { ReactComponent as SuccessIcon } from "../../../images/vectors/success.svg";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');


const SuccessRegistrationModal = () => {
 

  return createPortal(
    <div className={s.modal__backdrop}>
      <div className={s.modal__content}>
        <div className={s.successBox}>
          <SuccessIcon className={s.successIcon} />
          <h1 className={s.successText}>Registration successful</h1>
          <p className={s.successText}>We have sent you a verification link to your registered e-mail.</p>
          <p className={s.errorText}>If you didn't receive the link, please click below.</p>
          {/* <button type="button" className={s.resendBtn} onClick={resendLetter}>resend</button>
          <p className={s.msg}>{msg}</p> */}
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default SuccessRegistrationModal;