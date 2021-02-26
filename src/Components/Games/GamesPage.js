import React, {useState} from "react";
import "./GamesPage.css";
// import {deleteFavorite} from '../../redux/actions/UserGamesActions';


//Need to add buttons for adding or deleting favorites in 

const GamesPage = ({games, isFavorite, addFavorite, deleteFavorite}) => {   //had to add{} inside the () because of object destructuing. it thought of it as a single object with only () instead of individual objects ({})
  console.log(games);
  return (
    <div className="gamesContainer">
      <h3>{games.name}</h3>
      <img src={games.image} />
      <p>{games.desciption}</p>
    </div>
  );
};

function mapStateToProps(state){
  return {};
}
export default GamesPage;