import React from 'react';

class ProfilePhoto extends React.Component {
    render() {
        var path = require("public/images/profile.png");
        return (
            <img src= {path}/>
        );
    }
}

export default ProfilePhoto;