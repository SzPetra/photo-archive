import React, {useState} from "react";
import {postData} from "../../util/fetch";

const AddNewPhotoPage = () => {
    const url = 'http://localhost:8080/photo';

    const[photoName, setPhotoName] = useState([]);
    const[photoMadeBy, setPhotoMadeBy]=useState([]);

    //for posting data to backend
    const addNewPhoto = async (photoName, photoMadeBy) => {
        await postData(url, photoName);
    }

    return (
        <form className="add-photo-form">
            <label htmlFor="photo-name">Kép címe: </label>
            <input id="photo-name" placeholder={photoName}
                   onChange={(e) => handlePhotoNameUpdate(e.target.value)} />

            <label htmlFor="photo-made-by">Készítette: </label>
            <input id="photo-made-by" placeholder={photoMadeBy}
                   onChange={(e) => handlePhotoMadeByUpdate(e.target.value)} />

            <button onClick={() => addNewPhoto}>Fénykép hozzáadása</button>
        </form>
    )
}

export default AddNewPhotoPage;