import React, {useState, useEffect} from 'react';
import {useTransition, animated} from 'react-spring'
import myLogo from '../Images/myLogo.png'
import uwinLogo from '../Images/uwin_logo.jpg'

function TopNav(props){
    const [showMenu, setShowMenu] = useState(false)
    let menu

    let navSize
    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset);
      console.log(new Date().getTime());
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
    if(scrollY>0){
        navSize={
            padding: "1px"
        };
        
    }
    else{
        navSize={
            padding: "2px"
        };
    }

    if(showMenu==false){
        navSize={
            padding: "1px"
        };
        menu=
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto md: hidden">
            <div className="text-sm lg:flex-grow">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </a>
                <button onClick={()=>props.setRedirect(1)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Projects
                </button>
                <button onClick={()=>props.setRedirect(2)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Contact
                </button>
            </div>
            <div>
                <a href="http://www.uwindsor.ca/" target="_blank" className="inline-block text-sm px-1 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><img src={uwinLogo} width="80px"/></a>
            </div>
        </div>
    }
    else{
        menu=
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </a>
                <button onClick={()=>props.setRedirect(1)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Projects
                </button>
                <button onClick={()=>props.setRedirect(2)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Contact
                </button>
            </div>
            <div>
            <a href="http://www.uwindsor.ca/" target="_blank" className="inline-block text-sm px-1 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><img src={uwinLogo} width="80px"/></a>
            </div>
        </div>
    }
       

    return(
       
        <nav className="z-50 flex items-center justify-between flex-wrap bg-blue-500 fixed w-full " style={navSize}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current mr-0" width="50px" src={myLogo}/>
    <span className="font-semibold text-xl tracking-tight ">Jobert Costan</span>
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

export default TopNav;