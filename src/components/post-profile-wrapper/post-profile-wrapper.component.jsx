import iconShare from '../images/icon-share.svg';

import ProfileContainer from '../profile-container/profile-container.component';
import ActiveShare from '../activeShare/activeShare.component';

import React from "react";

import './post-profile-wrapper.styles.scss';

class PostProfileWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
          showHideActiveShareComponent: true,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

    hideComponent(name) {
        switch (name) {
            case "showHideActiveShareComponent":
                this.setState({ showHideActiveShareComponent: !this.state.showHideActiveShareComponent });
                break;
            default:
            //null;
        }
    }      

    render() {
        const { showHideActiveShareComponent } = this.state;
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
                    <ProfileContainer/>
                    
                    {!showHideActiveShareComponent && <ActiveShare/>}

                    <button className={!showHideActiveShareComponent ? "active-bg-color" : null} onClick={() => this.hideComponent('showHideActiveShareComponent')}><img src={ iconShare } alt=""/></button>
                    
                    
                </div>

            </div>
        )
    }
}

export default PostProfileWrapper;