import Dashboard from "./pages/Dashboard";
import TransactionRecord from "./pages/TransactionRecord";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebaseConfig from "./firebase";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Spinner from "./pages/Spinner";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="transactions"
          element={
            <TransactionRecord
              transactionDate={new Date()}
              transactionAmount={2938}
              transactionName={"Geedad"}
              tags={["shopping", "bee keeping", "strippers"]}
            />
          }
        />
        <Route path="navbar" element={<Navbar />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="spinner"
          element={<Spinner spinnerType="PulseLoader" spinnerSize={"md"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
