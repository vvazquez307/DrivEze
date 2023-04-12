import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCar, getAllVehicles } from "../api-adapter";
import { getAllHubs } from "../api-adapter/hub";
import { updateCar } from "../api-adapter/admin";


function AdminCar(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;

    const [cars, setCars] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [editCar, setEditCar] = useState({});
    const [hubs, setHubs] = useState([]);

    const [updateImgURL, setUpdateImgURL] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [updateDailyRate, setUpdateDailyRate] = useState(null);
    const [updateLocation, setUpdateLocation] = useState("");

    async function Delete(carId)
    {   
       const token = localStorage.getItem("token");
       const deleteResposne = await deleteCar(token, carId);
       console.log(deleteResposne);
       window.location.reload();
    }
    useEffect(()=>
    {
        async function allVehicles()
        {
            let cars = await getAllVehicles();
            const hub = await getAllHubs();
            setHubs(hub);
            setCars(cars);
            console.log(cars);
            console.log(hubs);
        }
        allVehicles();
    }, []);
    function CarData()
    {  
        return (
            <div>
                {
                    cars.map((vehicle, index)=>
                    (

                        <div className="vehicleListing" key={vehicle.id}>
              <div className="vehicleImgBox">
                <img
                  className="vehicleImg"
                  src={vehicle.image}
                  alt={vehicle.name}
                />
                <div className="vehicleName">
                  <h3>{vehicle.name}</h3>
                </div>
              </div>
              <div className="vehicleDescription">
                <h3 className="vehicleDetails">Vehicle information:</h3>
                <h4 className="vehicleDetails">{vehicle.description}</h4>
                <br />

                <h3 className="vehicleDetails">Daily rate:</h3>
                <h4 className="vehicleDetails">${vehicle.daily_rate}</h4>
                <br />
                <h3 className="vehicleDetails">Hub location</h3>
                <h4 className="vehicleDetails">{vehicle.hubLocation}</h4>
                <button onClick={()=>Delete(vehicle.id)}>delete</button>
                <button onClick={()=>Edit(vehicle)}>edit</button>
                <br />
              </div>
              </div>
                    ))
                }
            </div>
        )
    }

    function Edit(car)
    {
        setShowEdit(true);
        setUpdateImgURL(car.image);
        setUpdateName(car.name);
        setUpdateDescription(car.description);
        setUpdateDailyRate(car.daily_rate);
        setUpdateLocation(car.hubLocation);
        setEditCar(car)
    }

    async function Update()
    {
        event.preventDefault();
        console.log("here")
        console.log(await updateCar(localStorage.getItem("token"), {carId:editCar.id,image:updateImgURL, name:updateName, description:updateDescription, daily_rate:updateDailyRate, hubLocation:updateLocation}));
        window.location.reload();
    }

    function EditInfo(vehicle)
    {

        const locationOptions = [];
        
        for(let i = 0; i <  hubs.length; i++)
        {
            if(hubs[i].location !== vehicle.location) locationOptions.push(hubs[i])
        }
        
        return(
            <div id="editForm">
                <form onSubmit={Update}>
                    <label>Image URL:
                    <input
                        type="text"
                        name="imageURL"
                        value={updateImgURL}
                        onChange={(event)=>setUpdateImgURL(event.target.value)}             
                    />
                    </label>
                    <br/>
                    <label>
                        Name:
                        <input id="vehicleName"
                            type="text"
                            name="name"
                            value={updateName}
                            onChange={(event)=>setUpdateName(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Description:
                        <input id="vehicleDescription" 
                            type="text"
                            name="description"
                            value={updateDescription}
                            onChange={(event)=>setUpdateDescription(event.target.value)}
                            style={{height:"60px"}}/>
                    </label>
                    <br/>
                    <label>
                        Daily Rate:
                        <input id="vehicleRate"
                            type="text"
                            name="dailyRate"
                            value={updateDailyRate}
                            onChange={(event)=>setUpdateDailyRate(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Hub:
                        <select id="vehicleLocation" onChange={(event)=>setUpdateLocation(event.target.value)}>
                            <option>{updateLocation}</option>
                            {
                                locationOptions.map((hub, index)=>
                                {
                                    return(
                                        <option>{hub.location}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <br/>
                    <button id="button" type="submit">Update</button>
                </form>
            </div>
        )
    }

    return(
        <div style={{display:"flex", flexDirection:"column", position:"relative",}}>
            {
                        showEdit? <div style={{position:"absolute"}}>{EditInfo(editCar)}</div> : null
            }
            <button id="button" onClick={()=>navigate("/adminAddCar")}>add car</button>
            {
                isAdmin?
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"300px"}}> 
                    <div className="allVehiclesPage">
                        <div className="allVehiclesBottomDiv" style={{height:"80vh", width:"50%"}}>
                            <CarData/>
                        </div>
                    </div>
                    
                </div>
                
                    :
                    navigate("/adminLogin")
            }
        </div>
    )
}

export default AdminCar;