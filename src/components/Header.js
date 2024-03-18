


import React from 'react';
import { LOGO_URL } from '../utils/constant'
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resList } from '../utils/constant';

const Header = () => {
    const [btnName, setBtnName] = useState("Log in");

    return (
        <div className='header-container'>

            <div className='header'>
                <div className='logoSearch'>
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/"}><h1>Food Adda</h1></Link>
                </div>
                <div className='nav-top'>
                    <div className='cart'>Cart</div>
                    <div className='cart'>Offers</div>
                    <div className='cart'>Help</div>
                    <div className='login'>
                        <button
                            onClick={() => {
                                btnName === "Log in" ? setBtnName("Sign out") : setBtnName("Log in")
                            }}>{btnName}
                        </button>
                    </div>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    {/* <li><Link style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link></li> */}
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={"/about"}>Dining Out</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={"/contact"}>Delivery</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "black" }}>Night Life</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;




// ======================================================================================
// import React from 'react';
// import { LOGO_URL } from '../utils/constant'
// import './Header.css'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [btnName, setBtnName] = useState("Login");

//     return (
//         <div className='header'>
//             <div className='logo-container'>
//                 <img className='logo'
//                     src={LOGO_URL}
//                     alt='logo' />
//             </div>
//             <div className='nav-items'>
//                 <ul>
//                     <li><Link style={{ textDecoration: "none", color:"black" }} to={"/"}>Home</Link></li>
//                     <li><Link style={{ textDecoration: "none" , color:"black"}} to={"/about"}>About</Link></li>
//                     <li><Link style={{ textDecoration: "none", color:"black" }} to={"/contact"}>Contact</Link></li>
//                     <li><Link style={{ textDecoration: "none", color:"black" }}>Cart</Link></li>
//                     <button className='login'
//                         onClick={() => {
//                            btnName === "Login" ? setBtnName("logout") : setBtnName("Login") }}>
//                         {btnName}
//                     </button>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header;