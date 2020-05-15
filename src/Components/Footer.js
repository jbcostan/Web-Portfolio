import React, {useState, useRef} from 'react';
import myLogo from '../Images/myLogo.png'
import {MdCopyright} from 'react-icons/md'
import {AiFillLinkedin, AiOutlineMail, AiFillFacebook} from 'react-icons/ai'

const scrollToRef = (ref) => window.scrollTo(10, ref.current.offsetTop)
function Footer(props){
    const [showMenu,setShowMenu]=useState(false)
    let menu
    const myRef = useRef(null)
    if(props.Redirect===2){
      scrollToRef(myRef);
      props.setRedirect(0);
    }

    if(showMenu===false){
        menu=
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto md: hidden block">
            <div className="text-xl lg:flex-grow">
                <a href="https://www.linkedin.com/in/costanj/" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiFillLinkedin/>
                </a>
                <a href="https://www.facebook.com/jobertbcostan" target="_blank"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiFillFacebook/>
                </a>
                <a href="mailto: costanj@uwindsor.ca" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiOutlineMail/>
                </a>
                <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 mr-4 text-sm">costanj@uwindsor.ca</p>
            </div>
        </div>
    }
    else{
        menu=
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-xl lg:flex-grow">
                <a href="https://www.linkedin.com/in/costanj/" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiFillLinkedin/>
                </a>
                <a href="https://www.facebook.com/jobertbcostan" target="_blank"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiFillFacebook/>
                </a>
                <a href="mailto: costanj@uwindsor.ca" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <AiOutlineMail/>
                </a>
                <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 mr-4 text-sm">costanj@uwindsor.ca</p>
            </div>
        </div>
    }



    return(
        <nav ref={myRef} className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            &nbsp;<MdCopyright/><span className="font-semibold text-xl tracking-tight">2020</span>
            <img className="fill-current mr-0" width="50px" src={myLogo}/>
            </div>
            <div className="block lg:hidden xl:hidden">
                <button onClick={()=>setShowMenu(!showMenu)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
           {menu}
        </nav>
    );
}

export default Footer;