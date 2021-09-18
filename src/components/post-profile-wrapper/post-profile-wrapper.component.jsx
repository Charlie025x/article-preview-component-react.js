import iconShare from '../images/icon-share.svg';

import ProfileContainer from '../profile-container/profile-container.component';
import ActiveShare from '../activeShare/activeShare.component';

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
                <div className={`profile-activeShare-wrapper ${!showHideProfileContainer ? 'active-bg-color' : ''}`}>
                    {showHideProfileContainer && <ProfileContainer/>}

                    <button onClick={() => this.hideComponent('showHideProfileContainer')}><img src={ iconShare } alt=""/></button>
                    
                    {!showHideProfileContainer && <ActiveShare/>}
                    
                </div>

            </div>
        )
    }
}

export default PostProfileWrapper;