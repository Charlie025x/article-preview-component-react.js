import avatarMichell from '../images/avatar-michelle.jpg';

import React from "react";

import './proflie-container.component.styles.scss';

const ProfileContainer = () => (
    <div className="profile-container">
        <img className="profile-picture" src={ avatarMichell } alt=""/>
        <div>
            <p className="username">Michelle Appleton</p>
            <p className="posted-date">28 Jun 2020</p>
        </div>
    </div>
)

export default ProfileContainer;