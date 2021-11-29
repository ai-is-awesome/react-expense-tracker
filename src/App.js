import Dashboard from "./pages/Dashboard";
import TransactionRecord from "./pages/TransactionRecord";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
