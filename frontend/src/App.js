import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from'react';
import Home from './pages/Home.jsx';
import ProjectPage from './components/ProjectPage.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/home" element={<ProjectPage />}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
