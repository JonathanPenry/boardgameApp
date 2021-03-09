import React, { useState } from "react";
import { useHistory } from "react-router-dom";      //useHistory to push them to the search page
import "./LoginPage.css";
import RandomPage from '../Random/RandomPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();                    //useHistory to push user to the search page

    async function login() {                        //Don't pass (username, password) because it just looks for them in local scope instead of global
        if (username.length < 8 || username.length > 20 || password.length < 8 || password.length > 20) {
            toast.warning("Username and Password must be between 8 and 20 characters.")
        }
        try {
            // Try to do the fetch to the appropriate endpoint
            // Post username and password in a body
            const response = await fetch("/users/login", {
                method: 'POST',
                // Headers tells it what kind of information to expect
                headers: {
                    "Content-Type": "application/json",
                },
                // Has trouble with objects so it need to be converted to a string
                body: JSON.stringify({username: username, password: password}),
            });
            // Check the response
            const json = await response.json();
            // Handle response correctly
            if (json.error){
                setError(json.error);
            }
            else {props.setUser(json.data.username);
            history.push("/search");
            }
        } catch (err) {
            setError("Something went wrong, please try again later.");
        }
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
                    <label className="flexLabel textRight" htmlFor="username">User Name: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                </div>
                <div className="loginDiv">
                    <label className="flexLabel textRight" htmlFor="password">Password: </label>
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