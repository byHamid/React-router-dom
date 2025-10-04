import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Home'
import HemidPage from "./HemidPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/HemidPage" element={<HemidPage />}/>
    </Routes>
    </>
  );
}

export default App