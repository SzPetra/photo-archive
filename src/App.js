import './App.css';
import React from "react";
import Navbar from "./uiKit/components/Navbar";
import PhotoPage from "./pages/photo/PhotoPage";
import {Route, Routes} from "react-router-dom";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/photo" element={<PhotoPage/>} />
          </Route>
      </Routes>
  );
}

export default App;
