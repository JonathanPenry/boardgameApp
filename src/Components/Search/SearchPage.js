import React, { useState, useMemo } from "react";
import GamesPage from '../Games/GamesPage';                     //Search results will be displayed on GamesPage
import { setSearch } from '../../redux/actions/SearchActions';
import { addFavorite, deleteFavorite } from '../../redux/actions/UserGamesActions';
import { connect } from "react-redux";
import './SearchPage.css';


import categories from '../shared/categories';                 //Categories listing comes from this shared folder
import { ReactReduxContext } from "react-redux";

const SearchPage = (props) => {
    const [search, setSearch] = useState("");       //Should this be name?
    const [categories, setCategory] = useState("");
    const [minPlayer, setMinPlayer] = useState("");
    const [maxMsrp, setMaxMsrp] = useState("");
    const [aveRating, setAveRating] = useState("");
    const [limit, setLimit] = useState(25);
    const [orderBy, setOrderBy] = useState("");
    const [error, setError] = useState("");

    // const favIds = useMemo(() => {                    //EX: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    //     return (props.favorite.map((game) => game.id);
    // }, [props.favorite]);

    async function getGame(search, categories, minPlayer, maxMsrp, limit, orderBy, error) {
        const key = "CdoIKzHYo3"
        const url = `https://api.boardgameatlas.com/api/search?name=${search}&client_id=${key}&categories=${categories}&gt_min_players=${minPlayer}&lt_msrp=${maxMsrp}&limit=${limit}&order_by=${orderBy}`;
        try {
            setError("");
            let response = await fetch(url);
            let json = await response.json();
            let results = json.data.map((val) => {
                return {name: val.name, image: val.image_url, desciption: val.description_preview};
            });
            props.setSearch(results); 
            console.log(results);   
        } catch (e) {
            setError("There was an error");
            props.setSearch([]);
        }
    }
}

//mapDispatchToProps the piece of state that you need
//dispatch is telling it what actions you want to access
//ability to trigger those actions
const mapDispatchToProps = {
    setSearch,
    addFavorite,
    deleteFavorite,
};

//mapStateToProps takes state and attaches them to props for keys we've defined.
//IMPORTANT THAT YOU ONLY GIVE IT ACCESS THAT YOU NEED SO IT DOESN'T RERENDER ANYTIME AN UNNECESSARY ONE CHANGES
function mapStateToProps(state){        //passing global state into the props in the component
    return {                            //function is telling it to pay attention to these states
        username: state.user.username,  //returns object with keys pointing
        game: state.search,
        favorites: state.favorites,     //favorites is what we called the key in the index
    };
}

//CONNECT mapStatetoProps (pieces of state it has action to) & mapDispatchtoProps (actions it has access to)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
//connect is from react Redux (imported above)