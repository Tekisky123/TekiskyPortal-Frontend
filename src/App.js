import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import QRScanner from "./Pages/QRScanner";
import StudentsTable from "./Pages/StudentsTable";
import SubjectPage from "./Pages/SubjectPage";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/students" element={<StudentsTable />} />
       
      </Routes>
    </div>
  );
}

export default App;
