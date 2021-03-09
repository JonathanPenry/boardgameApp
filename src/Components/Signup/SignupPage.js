import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stateSelect from '../shared/states'


const SignupPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [visible, setVisible] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();                    //useHistory to push user to the search page

    async function signup() {                 
        // Separated out errors to give more specific feedback to the user.
        if (username.length < 8 || username.length > 20 || password.length < 8 || password.length > 20) {
            toast.warning("Username and password must be between 8 and 20 characters.")
        }
        if (firstname.length < 2 || firstname.length > 20 || lastname.length < 2 || lastname.length > 20) {
            toast.warning("First and last name must be between 2 and 20 characters.")
        }
        if (firstname.length < 2 || firstname.length > 20 || lastname.length < 2 || lastname.length > 20) {
            toast.warning("First and last name must be between 2 and 20 characters.")
        }
        if (city.length < 2 || city.length > 20) {
            toast.warning("City must be between 2 and 20 characters.")
        }
        if (state.length === 0) {
            toast.warning("Please choose your state from the drop down list.")
        }
        if (visible.length === 0) {
            toast.warning("Please choose the visibility of your profile for other users.")
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
            <section className="signupContainer">
                <h2 className="textCenter">Signup for an account</h2>
                <ul className="rightMargin1">
                    <li>Search a database of 20,000+ board games</li>
                    <li>Store your board game collection</li>
                    <li>See the board game collection of other users</li>
                    <li>Find players in your area interested in the same games (coming soon...)</li>
                    <li>Message players to organize a game night (coming soon...)</li>
                </ul>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="username">User Name: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                </div>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="password">Password: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="firstname">First Name: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname} />
                </div>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="lastname">Last Name: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname} />
                </div>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="city">City: </label>
                    <input
                        className="flexTextBox"
                        type="text"
                        id="city"
                        onChange={(e) => setCity(e.target.value)}
                        value={city} />
                </div>
                <div className="signupDiv">
                    <label className="flexLabel" htmlFor="state">State: </label>
                    <select
                        className="flexTextBox"
                        name="dropState"
                        id="dropState"
                        value={state}
                        onChange={(e) => setState(e.target.value)}>
                        <option></option>
                        {stateSelect.map((stateSelect) => {
                            return <option
                                key={stateSelect.abbreviation}
                                value={stateSelect.abbreviation}>{stateSelect.name}</option>;
                        })}
                    </select>
                </div>
                <div className="borderBlue1 textCenter">
                    <label htmlFor="dropVisibility">Profile Visibility</label>
                    <select
                        name="dropVisibility"
                        id="dropVisibility"
                        value={visible}
                        onChange={(e) => setVisible(e.target.value)} >
                        <option> </option>
                        <option>Yes, others can see my games</option>
                        <option>No, don't allow others to see my games</option>
                    </select>
                </div>
                <div className="textRight">
                    <button onClick={() => signup()}>Sign Up</button>
                    <ToastContainer />
                </div>

                <div className="textCenter">
                    <p>Already registered? <a href="/login">Login</a></p>
                </div>

            </section>
        </>
    )

}
export default SignupPage;