import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>
            
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Singapore</span>
                    
                </div>  
            </div>

            <div className="header__search">
                <button className="header__searchFilter">All</button>
                <input className="header__searchInput" type="text"></input>
                <IconButton>
                    <SearchIcon className="header__searchIcon" />
                </IconButton>
            </div>

            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>   
                </div>  
            </div>
            </Link>
            
            <Link to="/orders">
                <div className="header__nav">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>  
                </div>
            </Link>
            

            <Link to="/checkout">
                <div className="header__nav">
                    <div className="header__optionCart">
                        <AddShoppingCartOutlinedIcon />
                        <span className="header__optionLineTwo  header__cartCount">{cart?.length}</span>
                    </div>  
                </div>
            </Link>
            
        </div>
    )
}

export default Header