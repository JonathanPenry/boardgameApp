import React, { useState, useEffect } from 'react';
import './RandomPage.css';
import { Spring } from 'react-spring/renderprops'

const RandomPage = (props) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");


    async function randomGame(search, error) {
        const key = "CdoIKzHYo3"
        const url = `https://api.boardgameatlas.com/api/search?client_id=CdoIKzHYo3&random=true&limit=1`;
        try {
            setError("");
            let response = await fetch(url);            //Uses fetch method on the url provided and assigns to "response"
            let json = await response.json();           //Fetch "response" is converted to json format using json() method
            let resGames = json.games[0].image_url;
            setSearch(resGames);
            // console.log(Object.keys(resGames))
            console.log(resGames);
        } catch (e) {
            setError("There was an error");
            setSearch([]);
        }
    }
    useEffect(() => randomGame(), []);

    return (
        <div className="randomContainer textCenter">
            <h2 className="marginBtm0">Not sure what to search for?</h2>
            <p className="marginTop0">(Click for another random suggestion...)</p>
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 5000 }}>
                {props => (
                    <div style={props}>
                        <img className="imgSize"
                            onClick={() => randomGame()}
                            src={search} />
                    </div>
                )}
            </Spring>
        </div>
    );
}

export default RandomPage;

//ORIGINAL PRE SPRING
// return (
//     <div className="randomContainer textCenter">
//         <h2 className="marginBtm0">Not sure what to search for?</h2>
//         <p className="marginTop0">(Click for another random suggestion...)</p>
//         <img className="imgSize"
//             onClick={() => randomGame()}
//             src={search} />
//     </div>

// );