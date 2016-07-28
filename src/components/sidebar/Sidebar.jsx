import React from 'react';
import sidebar_styles from 'sidebar.css'
import styles from 'app.css';
import {Link} from 'react-router';

class Sidebar extends React.Component {

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
            <div className={styles.sidebar_container}>
                <div>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="/"> Home</Link>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="blog"> Blog</Link>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large"} to="resume"> Resume</Link>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="blog"> Photography</Link>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="blog"> Tools and Technology</Link>
                    <Link className={sidebar_styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="blog"> Contact Me </Link>
                </div>
                <div className = {[styles.center, styles.equi_center, styles.media_container].join(" ")}>

                    {
                        this.state.social_media_list.map(media =>
                            <SocialMedia id={media} src={this.state.social_media_info[media].src} href={this.state.social_media_info[media].href}/>
                        )
                    }
                </div>
            </div>
        )
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
export default Sidebar;