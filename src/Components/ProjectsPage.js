import React, {useState, useRef, useEffect} from 'react';
import imgUrl from '../Images/profile.jpg'
import GitHub from '../Images/github_icon.png'
import ExLink from '../Images/exlink.png'

const scrollToRef = (ref) => window.scrollTo(10, ref.current.offsetTop)

function ProjectsPage(props){
    const divStyle = {
        color: 'blue',
        width:"40%",
        height:"90%",
        backgroundImage: 'url(' + imgUrl + ')'
      };
      const myRef = useRef(null)
      if(props.Redirect===1){
        scrollToRef(myRef);
        props.setRedirect(0);
      }

    return(
      <>
    <div ref={myRef} className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          My Side Projects
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Project links and repositories
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <a href="https://github.com/jbcostan/eCommerce-Bookstore" target="_blank"><img className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" src={GitHub}/></a>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900"><a href="http://www.costanj.myweb.cs.uwindsor.ca/" target="_blank" className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">eCommerce Bookstore<img src={ExLink} width="10px" height="10px"/></a></h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    <ul className="list-disc px-1">
                      <li>Front-end with WordPress, MySQL/phpMyAdmin for database</li>
                      <li>Features include Login, Shopping Cart, Purchased Items, Product List </li>
                      <li>Admin Tool to restock/manage account</li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <a href="https://github.com/jbcostan/Web-Portfolio" target="_blank"><img className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" src={GitHub}/></a>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">Website Portfolio</h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                      Yes it's this website!<br/>
                      Built with React.js and Tailwindcss framework
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <a href="https://github.com/jbcostan/bookstore-html-css-JQuery" target="_blank"><img className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" src={GitHub}/></a>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900"><a href="http://www.costanj.myweb.cs.uwindsor.ca/comp2707/project/" target="_blank" className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Simpler Bookstore <img src={ExLink} width="10px" height="10px"/></a></h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                  Built with HTML, CSS, AJAX, JQuery, PHP, MySQL 
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <a href="https://github.com/jbcostan/MyDiscordBot" target="_blank"><img className="hover:bg-indigo-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" src={GitHub}/></a>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">Discord Chat Bot</h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    <ul className="list-disc px-1">
                        <li>General purpose chat bot in C# (.NET Core)</li>
                        <li>Asynchronous programming</li>
                        <li>Discord and League of Legends API</li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
    );
};
export default ProjectsPage;