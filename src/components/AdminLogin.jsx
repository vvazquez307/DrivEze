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
        <div id="login-form">
            <h1>Admin Login</h1>
            <form onSubmit={(event)=>submitLogin(event)}>
                <label>
                    <input 
                        type="username"
                        onInput={(event)=>setUsername(event.target.value)}
                        placeholder="Admin User"
                        id="text-box"
                    />
                </label>
                <label>
                    <input
                        type="password"
                        onInput={(event)=>setPassword(event.target.value)}
                        placeholder="Admin Password"
                        id="text-box"
                    />
                </label>
                <button id="button" type="submit">Login to Admin</button>
            </form>
        </div>
    )
}

export default AdminLoginPage;