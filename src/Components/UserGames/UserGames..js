import React, {useState} from 'react';
import { deleteFavorite } from '../../redux/actions';
import { connect } from 'react-redux';
import './UserGames.css';
import GamesPage from "../Games/GamesPage";
import RandomPage from '../Random/RandomPage';

const UserGames = (props) => {
return (
    <>
    <RandomPage />
    <div className="favsContainer">
    <h2 className="textCenter marginTop0">Favorited games</h2>
      {props.favorites.map((v) => (
          <GamesPage key={v.id} games={v} isFavorite={true} deleteFavorite={props.deleteFavorite} />
        ))}
      </div>
    </>
)}
//favorites states
//delete favorites
const mapDispatchToProps = {            //telling dispatch what actions you want to access
    deleteFavorite,
  };
   
  function mapStateToProps(state) {
    return {
      favorites: state.favorites,
    };
  }
// export default UserGames;
export default connect(mapStateToProps, mapDispatchToProps)(UserGames);