import React, { useEffect, useState } from "react";
import { getAllHubs } from "../api-adapter/hub";
import { createCar } from "../api-adapter/admin";
import { useNavigate } from "react-router-dom";



function AdminAddCarPage()
{
    const navigate = useNavigate();

    const  [imgURL, setImgURL] = useState("");
    const  [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dailyRate, setDailyRate] = useState(null);
    const [location, setLocation] = useState("");

    const [hubs, setHubs] = useState([]);

    useEffect(()=>{
        async function getHubs()
        {
            let hub = await getAllHubs();
            setHubs(hub);
        }
        getHubs();
    }, []);

    async function CreateNewCar()
    {
        event.preventDefault();

        console.log(await createCar(localStorage.getItem("token"), {name, description, daily_rate:dailyRate, hubLocation:location, image:imgURL}))
        navigate("/adminCars")
    }   

    return (
        <div>
            <h1>Add New Car</h1>
            <div id="editForm">
                <form onSubmit={CreateNewCar}>
                    <label>Image URL:
                    <input
                        type="text"
                        name="imageURL"
                        value={imgURL}
                        onChange={(event)=>setImgURL(event.target.value)}             
                    />
                    </label>
                    <br/>
                    <label>
                        Name:
                        <input id="vehicleName"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Description:
                        <input id="vehicleDescription" 
                            type="text"
                            name="description"
                            value={description}
                            onChange={(event)=>setDescription(event.target.value)}
                            style={{height:"60px"}}/>
                    </label>
                    <br/>
                    <label>
                        Daily Rate:
                        <input id="vehicleRate"
                            type="text"
                            name="dailyRate"
                            value={dailyRate}
                            onChange={(event)=>setDailyRate(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Hub:
                        <select id="vehicleLocation" onChange={(event)=>setLocation(event.target.value)}>
                            {
                                hubs.map((hub, index)=>
                                {
                                    return(
                                        <option>{hub.location}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <br/>
                    <button id="button" type="submit">Add Car</button>
                </form>
            </div>
        </div>
    )
}

export default AdminAddCarPage;