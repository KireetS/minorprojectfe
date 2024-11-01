import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import LoginContext from "./Contexts/loginContext/LoginContext";
import Mobile from "./Components/Sidebar/Mobile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Expenses from "./Components/Expenses/Expenses";
function App() {
  const { login, setLogin } = useContext(LoginContext);
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <ToastContainer />

      <div className="h-screen flex w-full">
        <Sidebar />
        <Routes>
          {!login && <Route path="/*" element={<Auth />} />}
          {login && (
            <>
              <Route path="/expenses" element={<Expenses />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
