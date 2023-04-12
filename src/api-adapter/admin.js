import { BASE_URL, makeHeaders } from "./index";

export async function adminLogin(username, password)
{
    try
    {
        const response = await fetch(`${BASE_URL}/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({username, password}),
        });
        const result = await response.json();
        return result;
    }
    catch(e)
    {
        console.error(e);
        throw e;
    }
}

export async function authAdmin(token)
{
    try
    {
        const response = await fetch(`${BASE_URL}/admin/auth`,{
            method:"POST",
            headers: makeHeaders(token),
            body:null,
        });
        const result = await response.json();
        return result;
    }
    catch(e)
    {
        console.error("ERROR IN ADMIN AUTH");
        throw e;
    }
}

export async function updateCar(token, fields)
{
    try
    {
        const response= await fetch(`${BASE_URL}cars/`,{
            method:"PATCH",
            headers:makeHeaders(token),
            body:JSON.stringify({...fields})
        });
        const result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}

export async function createCar(token, fields)
{
    try
    {
        const response = await fetch(`${BASE_URL}cars/`,
        {
            method:"POST",
            headers:makeHeaders(token),
            body: JSON.stringify({...fields}),
        });
        const result = await response.json();
        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}

export async function addHub(token, fields)
{
    try
    {
        const repsonse = await fetch(`${BASE_URL}hubs/`,{
            method:"POST",
            headers:makeHeaders(token),
            body: JSON.stringify({...fields}),
        });
        const result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}

export async function deleteHub(token, id)
{
    console.log("ID: ", id)
    try
    {  
        const response = await fetch(`${BASE_URL}hubs/`,{
            method:"DELETE",
            headers:makeHeaders(token),
            body: JSON.stringify({id}),
        });
        const result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}

export async function addCarToHubInventory(carId, hubId, token)
{
    try
    {
        const response = await fetch(`${BASE_URL}inventory/${hubId}`,
        {
            method:"POST",
            headers:makeHeaders(token),
            body: JSON.stringify({carId}),
        });
        const result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log(e)
    }
}

export async function deleteCarFromHubInventory(carId, hubId, token)
{
    try
    {
        const response = await fetch(`${BASE_URL}inventory/`, {
            method:"DELETE",
            headers:makeHeaders(token),
            body: JSON.stringify({carId, hubId}),
        })
        const result = await response.json();

        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}