import React, {useEffect, useState} from "react";
import {getData} from "../../util/fetch";
import "./assets/photoPage.css";

const PhotoPage = () => {
    const url = 'http://localhost:8080/photo';
    const[photos, setPhotos]=useState([]);

    const fetchPhotos = async () => {
        let data = await getData(url);
        setPhotos(data);
    }

    useEffect(() => fetchPhotos, [photos]);

    return (
        <table className="photo-table">
            <thead className="photo-table-header"><tr>
                <th>Fénykép címe</th>
                <th>Készítette</th>
                <th>Megtekintések</th>
            </tr></thead>

            <tbody className="photo-table-body"><tr>
                <td className="photo-table-body-element">{photos.map((photo) => photo.name)}</td>
                <td className="photo-table-body-element">{photos.map((photo) => photo.madeBy)}</td>
                <td className="photo-table-body-element">{photos.map((photo) => photo.viewCounter)}</td>
            </tr></tbody>
        </table>
    )
}

export default PhotoPage;