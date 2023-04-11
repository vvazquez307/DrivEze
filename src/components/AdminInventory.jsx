import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHubs, hubInventory } from "../api-adapter/hub";
import { getAllVehicles } from "../api-adapter";



function AdminInventory(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;

    const [hubs, setHubs] = useState([]);
    const [hubInventories, setHubInventories] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(()=>
    {
        async function GetHubs()
        {
            const hub = await getAllHubs();
            const car = await getAllVehicles();
            const hubInventories = [];
            for(let i = 0; i<hub.length; i++)
            {
                hubInventories.push(await hubInventory(hub[i].id));
            }
            for(let i = 0; i < hubInventories.length; i++)
            {
                for(let j = 0; i < cars.length; j++)
                {

                } 
            }
            console.log(hubInventories)
            setHubs(hub);
            setHubInventories(hubInventories);
        }
        GetHubs();
    }, [])

    function ShowData()
    {

        console.log(hubs);
        
        

        return (
            <div>
                {
                    hubs.map((hub, index)=>
                    {
                        return(
                            <div>
                            <h3>{hub.location}</h3>
                            {
                                hubInventories[index][0].name
                            }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return(
        <div>
            {
                isAdmin? <div><h1>Admin Inventory Page</h1> <ShowData/></div>: navigate("/adminLogin")
            }
        </div>
    )
}

export default AdminInventory;