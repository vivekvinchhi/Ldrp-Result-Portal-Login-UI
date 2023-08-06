import logo from './google.png';
import './App.css';
import Login from './Components/Registration/login';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Forgotpass from './Components/Registration/Forgetpassword/forgetpassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
