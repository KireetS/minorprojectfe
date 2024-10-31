import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
