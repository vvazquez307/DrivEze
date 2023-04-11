import React, { useState } from "react";
import { addHub } from "../api-adapter/admin";
import { useNavigate } from "react-router-dom";

function AdminAddHub()
{
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    async function CreateNewHub()
    {
        event.preventDefault();
        console.log(await addHub(localStorage.getItem("token"), {location, latitude, longitude}));
        navigate("/adminHubs")
    }

    return(
        <div>
            <h1>Add Hub</h1>
            <form onSubmit={CreateNewHub}>
                <label>
                    Hub Location: 
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(event)=>setLocation(event.target.value)}
                    />
                    <br/>
                    <label>
                    Latitude: 
                    <input
                        type="number"
                        name="latitude"
                        value={latitude}
                        onChange={(event)=>setLatitude(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                    Longitude: 
                    <input
                        type="number"
                        name="longitude"
                        value={longitude}
                        onChange={(event)=>setLongitude(event.target.value)}
                        />
                    </label>
                    <br/>
                    <button id="button"type="submit">Add New Hub</button>
                </label>
            </form>
        </div>
    )
}

export default AdminAddHub;