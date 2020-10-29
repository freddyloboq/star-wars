import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Dropdown } from "react-bootstrap"
import { RiCloseCircleLine } from "react-icons/ri";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        store.favorites !== undefined ?
            (
                store.favorites.map((item, index) => {
                    return (
                        <Dropdown.Item href="#/action-1" key={index}>{item}<RiCloseCircleLine className="ml-2 h5" onClick={() => actions.removeFavorite(index)} /></Dropdown.Item>
                    )
                })
            )
            :
            (
                <h1>Loading</h1>
            )
    )
};

export default Favorites;