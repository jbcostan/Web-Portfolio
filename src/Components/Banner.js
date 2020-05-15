import React from "react";
import './banner.scss'
import BookStore2 from '../Images/bookstore2.png'
import BookStore1 from '../Images/bookstore1.jpg'
import GitHub from '../Images/github_page.png'
import MyLogo from '../Images/myLogo.png'
import Uwindsor from '../Images/uwin_logo.jpg'
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
                <img src={GitHub} height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
            </div>
        </div>
</div>
    );
}

export default Banner;