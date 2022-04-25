import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from '../../css/MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() { 
    const favoriteCtx = useContext(FavoritesContext);
    return (
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> All Meetups </Link>
                        </li>
                        <li>
                            <Link to='/new-meetup'> Add New </Link>
                        </li>
                        <li>
                        <Link to='/favorites'> Favorites
                            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
 }

export default MainNavigation;