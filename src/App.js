import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import './App.css';
import Signup from './pages/Signup';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
