import React from "react";
import Navbar from "./components/Navbar/Navbar";
import EmployeeTable from "./components/EmployeeTable/EmplyeeTable";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <EmployeeTable />
      <Footer />
    </div>
  );
}

export default App;
