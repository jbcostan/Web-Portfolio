import React, {useState} from 'react'
import imgUrl from '../Images/profile2.png'
import imgGithub from '../Images/github_icon.png'
import imgDownload from '../Images/download_icon.png'
import {useTransition, animated} from 'react-spring'
function AboutPage(){
    const divStyle = {
        width: '85%',
        height: '93%'
      };
      const top50={
        position:"relative",
        top:"0px"
    }
    return(
        <div className="relative bg-white overflow-hidden " style={top50}>
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
      
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="-mr-2 flex items-center md:hidden">

                    </div>
                  </div>
                </div>
              </nav>
            </div>

      
            <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Computer Science
                  <br className="xl:hidden" />
                  <span className="text-indigo-600">Software Engineering</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Hi! Thanks for vising, my name is Jobert Costan and I’m a recent graduate from the University of Windsor with a degree in Computer Science with Software Engineering Specialization. 
                  Feel free to check some of my side projects below. 
                  See my GitHub repository and resume for a full list of my expertise and experience.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      <img src={imgDownload} width="20px" height="20px" /> &nbsp;My Resume
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="https://github.com/jbcostan" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      GitHub <img src={imgGithub} width="20px" height="20px"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" style={divStyle} src={imgUrl} alt="" />
        </div>
      </div>
    );
}

export default AboutPage;