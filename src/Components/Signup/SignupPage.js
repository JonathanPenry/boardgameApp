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

    function signup() {
        // If statements checking the length of each one of the fields
        // Use toast warnings
        // Push up to database...
        if (username.length > 3 && password.length > 3) {
        } else { toast.warning("Please enter 4 or more characters into username & password.") }
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