import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, SidebarNav, SidebarSocial, Sidebar, CloseSign} from './Elements'; 
import {faFacebookF, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavLink to ="/">
                    <img src={require("../../images/image-removebg-preview.png")} alt="logo" />
                </NavLink>
                {!sidebar ? <Bars onClick={showSidebar}/> : <CloseSign onClick={showSidebar}/>}
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="#about">
                        About
                    </NavLink>
                    <NavLink to="#portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink to="#contact">
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">
                        <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                    </NavBtnLink>
                    <NavBtnLink to="/">
                        <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </NavBtnLink>
                    <NavBtnLink to="/">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </NavBtnLink>
                    <NavBtnLink to="/">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </NavBtnLink>
                </NavBtn>
            </Nav>

            <Sidebar>
                <SidebarNav className={sidebar ? 'sidebar-active' : 'sidebar'}>
                    <NavLink to="/" className="menu-link" onClick={showSidebar}>
                        Home
                    </NavLink>
                    <NavLink to="#about" className="menu-link" onClick={showSidebar}>
                        About
                    </NavLink>
                    <NavLink to="#portfolio" className="menu-link" onClick={showSidebar}>
                        Portfolio
                    </NavLink>
                    <NavLink to="#contact" className="menu-link" onClick={showSidebar}>
                        Contact
                    </NavLink>

                    <SidebarSocial>
                        <NavBtnLink to="/">
                            <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                        </NavBtnLink>
                        <NavBtnLink to="/">
                            <FontAwesomeIcon icon={faInstagram} className="icon"/>
                        </NavBtnLink>
                        <NavBtnLink to="/">
                            <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                        </NavBtnLink>
                        <NavBtnLink to="/">
                            <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </NavBtnLink>
                    </SidebarSocial>
                    
                </SidebarNav>
            </Sidebar>
        </>
    )
}


export default NavBar;