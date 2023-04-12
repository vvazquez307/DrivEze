import React, {useEffect, useState} from 'react';
import { authAdmin } from '../api-adapter/admin';
import { useNavigate } from 'react-router-dom';


function AdminPage(props)
{
    const navigate = useNavigate();
    const isAdmin = props.isAdmin;
    console.log(isAdmin);


    return(

        <div>
            {
                isAdmin? <h1 id="admin-hello">You've reached the Admin Page, click a button to begin</h1>:navigate("/adminLogin")
            }
        </div>
    )
}

/*
    TODO:
        /api/tags/
            POST
            PATCH(UPDATE)
            PATCH(DEACTIVATE)
            DELETE
        /api/inventory/
            POST
        /api/hubs/
            POST
            PATCH
            DELETE
        /api/cars/
            POST
            PATCH
            DELETE
        /api/car-tags/
            POST
            DELETE
*/

export default AdminPage;