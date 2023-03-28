import React from "react"
import {Link} from "react-router-dom"


const Login = () => {
    return (
        <div>
          <p>Username:</p>
          <input type="text" name="username" />
          <p>Password:</p>
          <input type="password" name="password" />
          <input type="submit" value="Login" />
          <div>
            <Link to="/register">Don't have an account? Sign up here!</Link>
          </div>
        </div>
        
      )
    }

export default Login