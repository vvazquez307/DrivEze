import React from "react";
import { useNavigate } from "react-router-dom";


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