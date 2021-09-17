import {links, socials, logoUrl} from '../data/NavBar';
import '../style/NavBar.css';
import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';


export default function NavBar(){
    const [showList, setShowList] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(()=>{
        const height = linksRef.current.getBoundingClientRect().height;
        if(showList){
            linksContainerRef.current.style.height = height + 'px';
        }
        else{
            linksContainerRef.current.style.height = '0px';
        }
    }, [showList]);
    return(
        <div className="page navbar">
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logoUrl} alt="logo"/>
                        <button className="toggle-btn" onClick={()=>setShowList(!showList)}>
                            <FaBars/>
                        </button>
                    </div>
                    <div className={`links-container ${showList ? 'show' : null}`} ref={linksContainerRef}>
                        <ul className="links" ref={linksRef}>
                            {
                                links.map(link => {
                                    const {url, id, text} = link;
                                    return <li key={id}><a href={url}>{text}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <ul className="socials">
                        {
                            socials.map(social => {
                                const {id, url, icon} = social;
                                return <li key={id}><a href={url}>{icon}</a></li>
                            })
                        }
                    </ul>
                </div>
            </nav>

            <h1>NavBar Page</h1>
            <Link to="/" className="back-home">Home</Link>
        </div>
    );
}