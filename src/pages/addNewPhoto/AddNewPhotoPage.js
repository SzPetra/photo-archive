import React, {useState} from "react";
import {postData} from "../../util/fetch";
import "./assets/addNewPhoto.css";

const AddNewPhotoPage = () => {
    const url = 'http://localhost:8080/photo';

    const[photoName, setPhotoName] = useState([]);
    const[photoMadeBy, setPhotoMadeBy]=useState([]);

    //for handling the input changes
    const handlePhotoMadeByUpdate = (person) => {
        setPhotoMadeBy(person);
    };
    const handlePhotoNameUpdate = (name) => {
        setPhotoName(name);
    };

    //for posting data to backend
    const addNewPhoto = (e) => {
        e.preventDefault();
        postData(url, {photoName, photoMadeBy});
    }

    return (
        <form className="add-photo-form" onSubmit={addNewPhoto}>
            <label htmlFor="photo-name">Kép címe: </label>
            <input id="photo-name" placeholder="autóbusz"
                   onChange={(e) => handlePhotoNameUpdate(e.target.value)} />

            <label htmlFor="photo-made-by">Készítette: </label>
            <input id="photo-made-by" placeholder="Szigeti Ferenc"
                   onChange={(e) => handlePhotoMadeByUpdate(e.target.value)} />

            <button type="submit" id="add-photo-form-button">Fénykép hozzáadása</button>
        </form>
    )
}

export default AddNewPhotoPage;