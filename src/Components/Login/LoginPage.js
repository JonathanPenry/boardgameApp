import React, { useState } from "react";
import { useHistory } from "react-router-dom";      //useHistory to push them to the search page
import "./LoginPage.css";

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");                 //useHistory to push user to the search page

    function login(username, password) {            //Pass username and password into the function
        console.log(username, password);            //Verify we are seeing what user inputs
        if (username.length > 3 && password.length > 3) {
            history.push("/search");                //Push user to search page since no backend...
        }
    }

    return (
        <section className="formContainer">
            <h3>Please enter your username and password:</h3>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            >Username: </input>

            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            >Password: </input>

            <button
                type="submit"
                value="submit"
                onClick={() => login()}             //Calls the login funciton which checks and pushes
            >Submit</button>
        </section>
    )

}
export default LoginPage;