import React, { useState, useEffect } from 'react';
// import './Random.css';

const RandomPage = (props) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    
    
    async function randomGame(search, error) {
        const key = "CdoIKzHYo3"
        const url = `https://api.boardgameatlas.com/api/search?client_id=${key}&random&limit=1`;
        try {
            setError("");
            let response = await fetch(url);            //Uses fetch method on the url provided and assigns to "response"
            let json = await response.json();           //Fetch "response" is converted to json format using json() method
            let resGames = json.games.map((val) => {    //json data has the values mapped to "resGames" variable
            return { id: val.id, name: val.name, image: val.image_url, desciption: val.description_preview };
        });
        // props.setSearch(resGames);    //commenting out this line gets the console logs to work on next 2 lines
        console.log(resGames);                    
        console.log("This line is after console.log(resGames) on RandomPage");
    } catch (e) {
        setError("There was an error");
        // props.setSearch([]);          //There isn't a search here so it seems unnecessary
    }
}
useEffect(() => randomGame(), []);


//Changing {search.id} to "resGames.id" gets undefined.
return (
        <div className="randomContainer">
        <h1>Random Container</h1>
        <h3>{search.id}</h3>   
        <h3>{search.name}</h3>    
        <img src={search.image} />
        <p>{search.desciption}</p>
        </div>
    );
}

export default RandomPage;
