import '../style/Sidebar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import * as DATA from '../data/SideBar';
import {FaTimes, FaBars} from 'react-icons/fa';
export default function SideBar(){
    const [showNav, setShowNav] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="page sidebar">
            <button className="open-btn" onClick={()=>setShowNav(true)}><FaBars/></button>
            <nav className={showNav ? 'show' : null}>
                <img src={DATA.logoUrl} alt=""/>
                <button onClick={()=>setShowNav(false)}><FaTimes/></button>
                <ul className="links">
                    {DATA.links.map(link => 
                        <li key={link.id}>
                            <a href={link.url}>
                                <span>{link.icon}</span>
                                {link.text}
                            </a>
                        </li>
                    )}
                </ul>
                <ul className="socials">
                    {DATA.socials.map(social => 
                        <li key={social.id}><a href={social.url}>{social.icon}</a></li>
                    )}
                </ul>
            </nav>
            <button className="modal-btn" onClick={()=>setShowModal(true)}>show modal</button>
            <div className={`modal-container ${showModal ? 'show' : ''}`}>
                <div className="modal-content">
                    <p>Modal Content</p>
                    <button onClick={()=>setShowModal(false)}><FaTimes/></button>
                </div>
            </div>
            <Link to="/" className="back-home">Home</Link>
        </div>
    );
}