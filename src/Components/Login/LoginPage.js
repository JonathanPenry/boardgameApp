import React, { useState } from "react";
import { useHistory } from "react-router-dom";      //useHistory to push them to the search page
import "./LoginPage.css";
import RandomPage from '../Random/RandomPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();                    //useHistory to push user to the search page

    function login() {                              //Don't pass (username, password) because it just looks for them in local scope instead of global
        if (username.length > 3 && password.length > 3) {
            history.push("/search");                //Push user to search page since no backend...
        } else {toast.warning("Please enter 4 or more characters into username & password.")}
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
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>
            <div className="loginDiv">
            <button onClick ={() => login()}>Submit</button>
            <ToastContainer />
            </div>
        </section>
        <RandomPage />
        </>
    )

}
export default LoginPage;