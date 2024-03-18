import React from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from '../utils/constant';
import { Link } from "react-router-dom"

const Body = () => {

    let listOfRestaurants = resList;
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
    const [searchText, setSearchText] = useState("");
    const [topRatedRestaurant, setTopRatedRestaurant] = useState(false);

    const handleTopRated = () => {
       if(!topRatedRestaurant){
        const handleTopRated = listOfRestaurants.filter(
            (res) => res.avgRating > 4);
        setFilteredRestaurant(handleTopRated);
       }
       else{
        setFilteredRestaurant(resList);
       }
       setTopRatedRestaurant(!topRatedRestaurant);
    };

    const handleSearch = () => {
        const filteredRestaurant = listOfRestaurants.filter(
            (res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(filteredRestaurant);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') { handleSearch() }
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onKeyDown={handleKeyDown} placeholder="     
                        &#128269;   Search for Restaurants , Cafe,  near me ..."
                    />
                </div>
                <button className="filter-btn"
                    onClick={handleTopRated} >{topRatedRestaurant ? 'All Restauranat' : 'Rating: 4.0+'}</button>
            </div>

            <div className="res-container">
            <div className="cards">
                {filteredRestaurant.map(restaurant =>
                    <Link style={{ textDecoration: "none",width:"350px"}} key={restaurant.id} to={"/restaurants/" + restaurant.id}><RestaurantCard resData={restaurant} /></Link>)}
            </div>
            </div>
        </div>
    )
}
export default Body;