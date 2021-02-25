import React, {useState} from "react";
import "./GamesPage.css";
// import {deleteFavorite} from '../../redux/actions/UserGamesActions';


//Need to add buttons for adding or deleting favorites in 

const GamesPage = (game) => { 
  return (
    <div className="gamesContainer">
      <h3>{game.name}</h3>
      <img src={game.url} />
    </div>
  );
};

function mapStateToProps(state){
  return {};
}
export default GamesPage;