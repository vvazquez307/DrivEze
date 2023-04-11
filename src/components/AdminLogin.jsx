import React,{useState} from 'react';
import { adminLogin } from '../api-adapter/admin';
import { useNavigate } from 'react-router-dom';


function AdminLoginPage()
{
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = async(event)=>
    {
        event.preventDefault();
        const result = await adminLogin(username, password);
        if(result.token)
        {
            console.log(result);
            localStorage.setItem("token", result.token);
            navigate("/admin");
            window.location.reload();//we reload the page to make sure the isAdmin prop gets propigated to the admin page
        }
        else
        {
            console.log(result);
            window.alert(result);
        }
    }

    return(
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={(event)=>submitLogin(event)}>
                <label>
                    username
                    <input 
                        type="username"
                        onInput={(event)=>setUsername(event.target.value)}
                    />
                </label>
                <label>
                    password
                    <input
                        type="password"
                        onInput={(event)=>setPassword(event.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default AdminLoginPage;