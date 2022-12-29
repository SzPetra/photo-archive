import './App.css';
import React, {useEffect, useState} from "react";

function App() {

  const url = 'http://localhost:8080/photo';
  const[photos, setPhotos]=useState([]);

  useEffect(() => fetchData, []);
  const fetchData = () => {
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      setPhotos(data);
    })
        .catch((error) => {
        });
  };

  return (
    <div className="App">
      {photos.map((photo) => photo.name)}
    </div>
  );
}

export default App;
