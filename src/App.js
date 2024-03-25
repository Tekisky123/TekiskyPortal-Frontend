import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import QRScanner from "./Pages/QRScanner";
import StudentsTable from "./Pages/StudentsTable";
import SubjectPage from "./Pages/SubjectPage";
import StudentForm from "./Pages/StudentForm";

function App() {

  const students = [
    { firstName: 'John', lastName: 'Doe', mobileNumber: '1234567890', gender: 'Male', batchName: 'React' },
    { firstName: 'Jane', lastName: 'Smith', mobileNumber: '9876543210', gender: 'Female', batchName: 'HTML/CSS' },
    { firstName: 'Michael', lastName: 'Johnson', mobileNumber: '5551234567', gender: 'Male', batchName: 'JavaScript' },
    { firstName: 'Emily', lastName: 'Brown', mobileNumber: '9998887776', gender: 'Female', batchName: 'Node.js' },
    { firstName: 'William', lastName: 'Wilson', mobileNumber: '3332221110', gender: 'Male', batchName: 'React' },
    { firstName: 'Ava', lastName: 'Martinez', mobileNumber: '7778889999', gender: 'Female', batchName: 'HTML/CSS' },
    { firstName: 'James', lastName: 'Taylor', mobileNumber: '1115557777', gender: 'Male', batchName: 'JavaScript' },
    { firstName: 'Sophia', lastName: 'Thomas', mobileNumber: '4443332220', gender: 'Female', batchName: 'Node.js' },
    { firstName: 'Ethan', lastName: 'Anderson', mobileNumber: '6669991111', gender: 'Male', batchName: 'React' },
    { firstName: 'Olivia', lastName: 'Garcia', mobileNumber: '2224446666', gender: 'Female', batchName: 'HTML/CSS' }
    // Add more dummy student data here
  ];
  
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/students" element={<StudentsTable students={students} />} />
        <Route path="/student-form" element={<StudentForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
