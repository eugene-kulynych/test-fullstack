import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/userActions";
import storage from "../../helpers/localStorage";

// Обов'язково прив'яжіть модальне вікно до root елемента
Modal.setAppElement("#root");

const MyModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/login", {
        email,
        password,
      });
      if (res.status === 200) {
        const token = res.data.token;
        dispatch(loginAction({ token }));

        storage.setItem("token", token);

        onClose();
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="modal-title">Login</h2>
      <form onSubmit={handleLoginSubmit} className="modal-form">
        <div className="form-group">
          <label htmlFor="modal-email">Email:</label>
          <input
            type="email"
            id="modal-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modal-password">Password:</label>
          <input
            type="password"
            id="modal-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default MyModal;
