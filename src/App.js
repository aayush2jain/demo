import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
     <Route path="/signin" element={<Signin></Signin>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
