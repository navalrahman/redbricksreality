import React from 'react';
import './LogoutModel.css';

const LogoutModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to logout?</h3>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Yes, Logout</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
