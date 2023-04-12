import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";
import { deleteHub } from "../api-adapter/admin";



function AdminHubs(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;


    const [hubs, setHubs] = useState([]);

    useEffect(()=>{
        async function getHubs()
        {
            setHubs(await getAllHubs());
        }
        getHubs();
    }, [])

    async function DeleteHub(hubId)
    {   
        console.log(await deleteHub(localStorage.getItem("token"), hubId));
        window.location.reload();
    }

    return(
        <div>
            {
                isAdmin? 
                <div id="login-form">
                    <h1>Admin Hubs Page </h1>
                    <button id="button" onClick={()=>navigate("/adminAddHub")}>Add Hub</button>
                    {
                        hubs.map((hub, index)=>
                        {
                            return(
                                <div>
                                    
                                    <h3>{hub.location}</h3>
                                    <button id="button" onClick={()=>DeleteHub(hub.id)}>Delete</button>
                                    <button id="button">Inventory</button>
                                </div>
                            )
                        })
                    } 
                </div>
                : navigate("/adminLogin")
            }
        </div>
    )
}

export default AdminHubs;