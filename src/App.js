import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import LoginContext from "./Contexts/loginContext/LoginContext";
import Mobile from "./Components/Sidebar/Mobile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Expenses from "./Components/Expenses/Expenses";
import Goals from "./Components/Goals/Goals";
import Investments from "./Components/Investments/Investments";
import SipCalculator from "./Components/sip/SipCalculator";
import Dashboard from "./Components/Dashboard/Dashboard";
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
              <Route path="/goals" element={<Goals />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sip" element={<SipCalculator />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
