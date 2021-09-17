import iconFacebook from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';import React from "react";

import "./activeShare.component.styles.scss";

const ActiveShare = () => (
    <div className="activeShare">
        <div>
            <p className="share">share</p>
            <img className="platform-btn" src={ iconFacebook } alt=""/>
            <img className="platform-btn" src={ iconTwitter } alt=""/>
            <img className="platform-btn" src={ iconPinterest } alt=""/>
        </div>
    </div>
)

export default ActiveShare;