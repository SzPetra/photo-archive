import React, {useState} from "react";

const UpdatePhotoPage = () => {
    const[photoName, setPhotoName] = useState([]);
    const[photoMadeBy, setPhotoMadeBy]=useState([]);

    //for handling the input changes
    const handlePhotoMadeByUpdate = (person) => {
        setPhotoMadeBy(person);
    };
    const handlePhotoNameUpdate = (name) => {
        setPhotoName(name);
    };

    return (
        <form className="add-photo-form">
            <label htmlFor="photo-name">Kép címe: </label>
            <input id="photo-name" placeholder={photoName}
                   onChange={(e) => handlePhotoNameUpdate(e.target.value)} />

            <label htmlFor="photo-made-by">Készítette: </label>
            <input id="photo-made-by" placeholder={photoMadeBy}
                   onChange={(e) => handlePhotoMadeByUpdate(e.target.value)} />

        </form>
    )
};

export default UpdatePhotoPage;