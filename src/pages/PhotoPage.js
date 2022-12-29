import React, {useEffect, useState} from "react";
import {getData} from "../util/fetch";

const PhotoPage = () => {
    const url = 'http://localhost:8080/photo';
    const[photos, setPhotos]=useState([]);

    const fetchPhotos = async () => {
        let data = await getData(url);
        setPhotos(data);
    }

    useEffect(() => fetchPhotos, []);

    return (
        <table>
            <tr>
                <th>Fénykép címe</th>
                <th>Készítette</th>
                <th>Megtekintések</th>
            </tr>
            <tr>
                <td>{photos.map((photo) => photo.name)}</td>
                <td>{photos.map((photo) => photo.madeBy)}</td>
                <td>{photos.map((photo) => photo.viewCounter)}</td>
            </tr>
        </table>
    )
}

export default PhotoPage;