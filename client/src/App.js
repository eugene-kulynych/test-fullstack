import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import storage from "./helpers/localStorage";
import { loginAction } from "./store/actions/userActions";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const token = storage.getItem("token");

    token && dispatch(loginAction({ token }));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute isLoggedIn={isAuthenticated}>
                <Registration />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
