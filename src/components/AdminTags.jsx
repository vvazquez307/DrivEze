import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllTags } from "../api-adapter/tags";


function AdminTags(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;

    return(
        <div>
            {
                isAdmin? <h1>Admin Tags Page</h1> : navigate("/adminLogin")
            }
        </div>
    )
}

export default AdminTags;