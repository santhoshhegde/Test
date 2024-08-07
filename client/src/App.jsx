import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./LoginPage";
import Dashboard from "./Dashboard";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import Edit from "./Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
