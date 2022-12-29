import './App.css';
import React from "react";
import Navbar from "./uiKit/components/Navbar";
import PhotoPage from "./pages/photo/PhotoPage";
import AddNewPhotoPage from "./pages/addNewPhoto/AddNewPhotoPage";
import {Route, Routes} from "react-router-dom";



function App() {

  return (
      <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<PhotoPage/>} />
            <Route exact path="/photo/add_new" element={<AddNewPhotoPage/>} />
          </Route>
      </Routes>
  );
}

export default App;
