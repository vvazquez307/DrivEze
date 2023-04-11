import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";



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

    return(
        <div>
            {
                isAdmin? 
                <div>
                    <h1>Hubs: </h1>
                    <button>Add Hub</button>
                    {
                        hubs.map((hub, index)=>
                        {
                            return(
                                <div>
                                    
                                    <h3>{hub.location}</h3>
                                    <button>delete</button>
                                    <button>inventory</button>
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