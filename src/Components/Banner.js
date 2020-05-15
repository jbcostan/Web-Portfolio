import React from "react";
import './banner.scss'
import BookStore2 from '../Images/bookstore2.png'
import BookStore1 from '../Images/bookstore1.jpg'
import GitHub from '../Images/github_page.png'
import MyLogo from '../Images/myLogo.png'
import Uwindsor from '../Images/uwin_logo.jpg'
import About from '../Images/About.png'
import Store from '../Images/Store.png'
import Category from '../Images/Category.png'
import Chat from '../Images/chat.jpg'
import Resume from '../Images/Resume_img.png'
function Banner(){

    return(
        <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src={Uwindsor} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src={MyLogo} height="100" width="130" alt="" />
            </div>
             <div className="slide">
                <img src={BookStore1} height="100" width="160" alt="" />
            </div>
            <div className="slide">
                <img src={BookStore2} height="100" width="200" alt="" />
            </div>
            <div className="slide">
                <img src={GitHub} height="100" width="200" alt="" />
            </div>
            <div className="slide">
                <img src={About} height="100" width="200" alt="" />
            </div>
            <div className="slide">
                <img src={Store} height="100" width="200" alt="" />
            </div>
            <div className="slide">
                <img src={Category} height="100" width="200" alt="" />
            </div>
            <div className="slide">
                <img src={Chat} height="100" width="100" alt="" />
            </div>
            <div className="slide">
                <img src={Resume} height="100" width="160" alt="" />
            </div>
            <div className="slide">
                <img src={Uwindsor} height="100" width="200" alt="" />
            </div>
        </div>
</div>
    );
}

export default Banner;