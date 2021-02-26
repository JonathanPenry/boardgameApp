import React, {useState} from "react";
import "./GamesPage.css";
// import {deleteFavorite} from '../../redux/actions/UserGamesActions';


//Need to add buttons for adding or deleting favorites in 
//Add{} inside the () because of object destructuing. it thought of it as a single object with only () instead of individual objects ({})
const GamesPage = ({games, isFavorite, addFavorite, deleteFavorite}) => {   
  console.log(games);
  return (
    <div className="gamesContainer">
      <h3>{games.name}</h3>
      <img src={games.image} />
      <p>{games.desciption}</p>
      {!isFavorite && (
        <button className="favorite" onClick={() => addFavorite(games)}>
          {" "}
          Add Favorite
        </button>
      )}
      {isFavorite && (
        <button className="favorite" onClick={() => deleteFavorite(games.id)}>
          {" "}
          Remove Favorite
        </button>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {};
}
export default GamesPage;