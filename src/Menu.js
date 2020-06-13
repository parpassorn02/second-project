import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

const MenuElement = function ({ text, to }) {
    return (
        <div className="MenuElement">
            <Link className="LinkElement" to={to}>{text}</Link>
        </div>
    )
}

export const Menu = function () {
    return (
        <div>
            <div className="Menu">
                <MenuElement text="Island" to="/island" />
                <MenuElement text="Mountain" to="/mountain" />
                <MenuElement text="History" to="/history" />
                <MenuElement text="Best time to visit" to="/besttimetovisit" />
            </div>
        </div>
    )
}