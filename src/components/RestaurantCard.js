import React from 'react';
import "./RestaurantCard.css"
import { CDN_URL } from '../utils/constant';


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, locality, costForTwo, cloudinaryImageId, avgRating } = resData
    return (
        <div className='res-card'>
            <div className='res-logo'>
                <img alt='Restaurant Photo' src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className='content-container'>
                <h3>{name}</h3>
                <h5>{avgRating}<span>&#9733;</span> </h5>
            </div>
            <div className='content-container'>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwo}</p>
            </div>
            <div className='locality-container'>
                <p>Locality :{locality}</p>
            </div>
        </div>
    )
}
export default RestaurantCard;