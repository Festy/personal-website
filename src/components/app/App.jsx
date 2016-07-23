import React from 'react';
import ProfilePhoto from 'ProfilePhoto.jsx';
import Introduction from 'Introduction.jsx';
import styles from 'app.css';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            social_media_list : ["github", "linkedin", "instagram", "facebook"],
            social_media_info : {
                "facebook": {
                    src: require("public/images/social_media/facebook.svg"),
                    href: "https://www.facebook.com/festy1601"
                },
                "linkedin": {
                    src: require("public/images/social_media/linkedin.svg"),
                    href: "https://www.linkedin.com/in/festy",
                },
                "github": {
                    src: require("public/images/social_media/github.svg"),
                    href: "https://github.com/festy",
                },
                "instagram": {
                    src: require("public/images/social_media/instagram.svg"),
                    href: "https://www.instagram.com/festy1601/"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className = {styles.center}>

                    <h3 className = {styles.center_text}>Welcome to my page!</h3>
                    <ProfilePhoto style = {styles.center_profile}/>
                    <Introduction style = {styles.center_text}/>

                </div>
                <div>

                    {
                        this.state.social_media_list.map(media =>
                        <SocialMedia id={media} src={this.state.social_media_info[media].src}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

class SocialMedia extends React.Component {
    render() {
        return (
            <div style={{display:"inline"}}>
            {
                <img key = {this.props.id} src={this.props.src}/>
            }
            </div>
        );
    }
}
export default App;