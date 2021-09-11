import PostProfileWrapper from "../post-profile-wrapper/post-profile-wrapper.component";

import React from "react";

import './card.styles.scss';

const Card = () => (
    <div className="card">
        <div className="image-container">
            {/* <img className="header-image" src={drawers} alt="drawers"/> */}
        </div>
        <PostProfileWrapper/>
    </div>
)

export default Card;