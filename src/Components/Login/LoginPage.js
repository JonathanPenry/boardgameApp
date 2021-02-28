import React, { useState } from "react";
import { useHistory } from "react-router-dom";      //useHistory to push them to the search page
import "./LoginPage.css";
import RandomPage from '../Random/RandomPage';

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();                    //useHistory to push user to the search page

    function login() {                              //Don't pass (username, password) because it just looks for them in local scope instead of global
        console.log(username, password);            //Verify user inputs are showing up
        if (username.length > 3 && password.length > 3) {
            history.push("/search");                //Push user to search page since no backend...
        }
    }

    return (
        <>
        <section className="loginContainer">
            <h3 className="textCenter">Login to find your next game</h3>
            <div className="loginDiv">
            <label htmlFor="username">User Name: </label>
            <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)} 
                value={username} />
            </div>
            <div className="loginDiv">
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>
            <div className="loginDiv">
            <button onClick ={() => login()}>Submit</button>
            </div>
        </section>
        <RandomPage />
        </>
    )

}
export default LoginPage;