import avatarMichell from '../images/avatar-michelle.jpg';
import iconShare from '../images/icon-share.svg';

import React from "react";

import './card.styles.scss';

const Card = () => (
    <div className="card">
        <div className="image-container">
            {/* <img className="header-image" src={drawers} alt="drawers"/> */}
        </div>
        <div className="post-profile-wrapper">
            <div className="post-container">
                <h2>
                Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home
                </h2>
                <p>
                Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.
                </p>
            </div>
    
            <div className="profile-container">
                <img className="profile-picture" src={ avatarMichell } alt=""/>
                <div>
                    <p className="username">Michelle Appleton</p>
                    <p className="posted-date">28 Jun 2020</p>
                </div>
                <button><img src={ iconShare } alt=""/></button>
            </div>

            {/* <!-- active sharing state, include with javascript --> */}
            <div className="profile-container activeShare ">
                <div>
                    <p className="share">share</p>
                    <img className="platform-btn" src="../images/icon-facebook.svg" alt=""/>
                    <img className="platform-btn" src="../images/icon-twitter.svg" alt=""/>
                    <img className="platform-btn" src="../images/icon-pinterest.svg" alt=""/>
                </div>
                <button><img src="./images/icon-share.svg" alt=""/></button>
            </div>

        </div>
    </div>
)

export default Card;