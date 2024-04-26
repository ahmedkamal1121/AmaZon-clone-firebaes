import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "./context/GloableContext";
import Home from "./Components/Home";
import CheakOut from "./Components/CheakOut";

function App() {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="cheakout"
          element={
            <>
              <Header />
              <CheakOut />
            </>
          }
        />
        <Route path="*" element={<h1>Page not found 404</h1>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
