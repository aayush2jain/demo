import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    
    <Route path="/demo" element={<Homepage></Homepage>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
