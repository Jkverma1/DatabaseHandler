import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchData from "./pages/SearchData";
import DatabaseDetailForm from "./pages/DatabaseDetailForm";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<DatabaseDetailForm />} />
            <Route exact path="/SearchData" element={<SearchData />} />
            <Route exact path="/logIn" element={<LogIn />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
