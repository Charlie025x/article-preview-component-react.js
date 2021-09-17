import avatarMichell from '../images/avatar-michelle.jpg';
import iconShare from '../images/icon-share.svg';
import iconFacebook from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';

import React from "react";

import './post-profile-wrapper.styles.scss';

class PostProfileWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
          showHideProfileContainer: true,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

    hideComponent(name) {
        switch (name) {
            case "showHideProfileContainer":
                this.setState({ showHideProfileContainer: !this.state.showHideProfileContainer });
                break;
            default:
            //null;
        }
    }      

    render() {
        const { showHideProfileContainer } = this.state;
        return (
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
                <div className="profile-activeShare-wrapper">
                    {showHideProfileContainer && (
                    <div className="profile-container">
                        <img className="profile-picture" src={ avatarMichell } alt=""/>
                        <div>
                            <p className="username">Michelle Appleton</p>
                            <p className="posted-date">28 Jun 2020</p>
                        </div>
                    </div>)}

                    {!showHideProfileContainer && (
                    <div className="activeShare">
                        <div>
                            <p className="share">share</p>
                            <img className="platform-btn" src={ iconFacebook } alt=""/>
                            <img className="platform-btn" src={ iconTwitter } alt=""/>
                            <img className="platform-btn" src={ iconPinterest } alt=""/>
                        </div>
                    </div>)}
                    
                    <button onClick={() => this.hideComponent('showHideProfileContainer')}><img src={ iconShare } alt=""/></button>
                </div>

            </div>
        )
    }
}

export default PostProfileWrapper;