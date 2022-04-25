import React, { useContext } from "react";
import classes from '../../../css/MeetupItem.module.css';
import FavoritesContext from "../../../store/favorites-context";
import Card from "../../ui/Card";

export default function MeetupItem(props) {

    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoritesStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{ props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites ' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}