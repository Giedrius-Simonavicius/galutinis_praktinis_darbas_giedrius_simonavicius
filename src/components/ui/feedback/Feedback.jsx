import React from 'react';
import './feedback.scss';
import { useAuthCtx } from '../../../store/AuthProvider';

function Feedback() {
  const { feedback, ui } = useAuthCtx();
  const { show, type, msg } = feedback;

  const handleClose = () => ui.closeMessage();

  return show ? (
    <div className={`feedbackContainer ${type}`}>
      <p className="msg">{msg}</p>
      <button className="closeButton" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
}

export default Feedback;
