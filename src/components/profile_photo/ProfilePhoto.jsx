import React from 'react';
import styles from 'profile_photo.css'

class ProfilePhoto extends React.Component {
    render() {
        var path = require("public/images/profile.png");
        return (
                <div>
                    <img src= {path} className={[styles.shape, this.props.style].join(' ')}/>
                </div>
        );
    }
}

export default ProfilePhoto;