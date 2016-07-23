import React from 'react';
import styles from 'profile_photo.css'

class ProfilePhoto extends React.Component {
    render() {
        return (
                <div>
                    <img src= {require("public/images/profile.png")} className={[styles.shape, this.props.style].join(' ')}/>
                </div>
        );
    }
}

export default ProfilePhoto;