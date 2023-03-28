import React from "react"
import {Link} from "react-router-dom"


const Register = () => {
    return (
        <div>
          <p>Username:</p>
          <input type="text" name="username" />
          <p>Password:</p>
          <input type="password" name="password" />
          <p>Confirm Password:</p>
          <input type="password" name="password" />
          <input type="submit" value="Create Account" />
          <div>
            <Link to="/login">Already have an account? Login here!</Link>
          </div>
        </div>
        
      )
    }

export default Register