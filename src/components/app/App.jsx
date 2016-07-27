import React from 'react';
import ProfilePhoto from 'ProfilePhoto.jsx';
import Introduction from 'Introduction.jsx';
import styles from 'app.css';
import Sidebar from 'Sidebar.jsx';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            social_media_list : ["github", "linkedin", "instagram", "facebook"],
            social_media_info : {
                "facebook": {
                    src: require("public/images/social_media/facebook.png"),
                    href: "https://www.facebook.com/festy1601"
                },
                "linkedin": {
                    src: require("public/images/social_media/linkedin.png"),
                    href: "https://www.linkedin.com/in/festy",
                },
                "github": {
                    src: require("public/images/social_media/github.png"),
                    href: "https://github.com/festy",
                },
                "instagram": {
                    src: require("public/images/social_media/instagram.png"),
                    href: "https://www.instagram.com/festy1601/"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className={styles.sidebar_container}>
                    <Sidebar />
                    <div className = {[styles.center, styles.equi_center, styles.media_container].join(" ")}>

                        {
                            this.state.social_media_list.map(media =>
                                <SocialMedia id={media} src={this.state.social_media_info[media].src} href={this.state.social_media_info[media].href}/>
                            )
                        }
                    </div>
                </div>
                <div className = {styles.main}>
                    <div>

                        <h3 className = {styles.center_text}>Welcome to my page!</h3>
                        <ProfilePhoto style = {styles.center_profile}/>
                        <Introduction style = {styles.center_text}/>

                    </div>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

class SocialMedia extends React.Component {
    render() {
        return (
            <div className={styles.icon_div}>
            {
                <a href={this.props.href}>
                    <img  key = {this.props.id} className={styles.icon} src={this.props.src}/>
                </a>
            }
            </div>
        );
    }
}
export default App;