import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

const MenuElement = function ({ text, to }) {
    return (
        <div className="MenuElement">
            <Link to={to}><h3>{text}</h3></Link>
        </div>
    )
}

export const Menu = function () {
    return (
        <div>
            <Link to="/"><img className="" ></img></Link>
            <div className="Menu">
                <MenuElement text="Island" to="/island" />
                <MenuElement text="Mountain" to="/mountain" />
                <MenuElement text="History" to="/history" />
                <MenuElement text="Best time to visit" to="/besttimetovisit" />
            </div>
        </div>
    )
}