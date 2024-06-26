import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className='App'>
      
        <Routes>
          <Route path="/" element={<Homepage/>} exact/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    
    </div>
  );
}

export default App;
