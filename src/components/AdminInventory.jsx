import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";



function AdminInventory(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;

    const [hubs, setHubs] = useState([]);


    useEffect(()=>
    {
        async function GetHubs()
        {
            const hub = await getAllHubs();
            setHubs(hub);
        }
    })

    function ShowData()
    {


        return (
            <div>
                
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