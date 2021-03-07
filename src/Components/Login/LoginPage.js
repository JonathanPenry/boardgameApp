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
        } else { toast.warning("Please enter 4 or more characters into username & password.") }
    }

    return (
        <>
            <section className="loginContainer">
            <h2 className="textCenter">Login to your account to:</h2>
                <ul className="rightMargin1">
                    <li>Search a database of 20,000+ board games</li>
                    <li>Store your board game collection</li>
                    <li>See the board game collection of other users</li>
                    <li>Find players in your area interested in the same games (coming soon...)</li>
                    <li>Message players to organize a game night (coming soon...)</li>
                </ul>
                <div className="loginDiv">
                    <label className= "flexLabel textRight" htmlFor="username">User Name: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                </div>
                <div className="loginDiv">
                    <label className= "flexLabel textRight" htmlFor="password">Password: </label>
                    <input
                        className="flexTextBox"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="textRight">
                    <button onClick={() => login()}>Submit</button>
                    <ToastContainer />
                </div>
                <div className="textCenter">
                    <p>Not registered? <a href="/signup">Sign Up</a></p>
                </div>
            </section>
            <RandomPage />
        </>
    )

}
export default LoginPage;