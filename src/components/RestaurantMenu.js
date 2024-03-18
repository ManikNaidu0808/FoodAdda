import React from 'react'
import { resList } from '../utils/constant';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(resList);
    const { resId } = useParams();
    console.log("data", resInfo)


    useEffect(() => {
        // Assuming resList is an array of restaurant objects
        // Filter the restaurant based on resId and set the filtered result
        const filteredRes = resInfo.filter(item => item.id === resId);
        setResInfo(filteredRes);
    }, [resId]);// Trigger useEffect whenever resId changes


    return (

        <div className='menu'>
            <div>{resInfo.map((item) => {
                const { name, cuisines, locality } = item;
                return (
                    <li key={item.id}>{item.name} - {locality}
                        <div>
                            <li>{cuisines}</li>
                        </div>
                    </li>)
            })}  </div>

        </div>
    )
}
export default RestaurantMenu;


{/* <ul>
    {resInfo.map((item) => {
    const { name, cuisines, locality } = item;
     return (
          <li key={item.id}> {cuisines}</li>)
         })}
   </ul> */}