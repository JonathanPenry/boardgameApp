import React, { useState, useEffect } from 'react';
// import './Random.css';

const RandomPage = (props) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    
    
    async function randomGame(search, error) {
        const key = "CdoIKzHYo3"
        const url = `https://api.boardgameatlas.com/api/search?client_id=CdoIKzHYo3&random=true&limit=1`;
        // const url = `https://api.boardgameatlas.com/api/search?client_id=${key}&random&limit=1`;
        try {
            setError("");
            let response = await fetch(url);            //Uses fetch method on the url provided and assigns to "response"
            let json = await response.json();           //Fetch "response" is converted to json format using json() method
            let resGames = json.games[0].image_url;
        
            //     let resGames = json.games.map((val) => {    //json.games.map((val) => {
        //     return { id: val.id, name: val.name, image: val.image_url, desciption: val.description_preview };
        // });
        setSearch(resGames);
        console.log(Object.keys(resGames))
        console.log(resGames);                    
        console.log("This line is after console.log(resGames) on RandomPage");
    } catch (e) {
        setError("There was an error");
        setSearch([]);
    }
}
useEffect(() => randomGame(), []);


return (
        <div className="randomContainer">
        <h1>Random Container</h1>
        <img src={search} />

        {/* <h3>{search.id}</h3>   
        <h3>{search.name}</h3>    
        <img src={search.image} />
        <p>{search.desciption}</p> */}
        </div>
    );
}
//Changing {search.id} to "resGames.id" gets undefined.

export default RandomPage;
