import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import storage from "../../helpers/localStorage";
import { logoutAction } from "../../store/actions/userActions";
import './Header.css'

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const logOutHandler = () => {
    storage.deleteItem("token");

    dispatch(logoutAction({ token: null }));
  };

  return (
    <header className="header-container">
      {!isAuthenticated ? (
        <>
          <button
            className="header-button register-button"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button className="header-button" onClick={handleLoginClick}>
            Login
          </button>
        </>
      ) : (
        <button className="header-button" onClick={logOutHandler}>
          Logout
        </button>
      )}
      <MyModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
