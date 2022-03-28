import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, SocialMediaLink, SidebarNav, SidebarSocial, Sidebar, CloseSign} from './Elements'; 
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
                    <SocialMediaLink href="https://www.facebook.com/VladIoanNicolaescu" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.instagram.com/vlad.nicolaescu/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </SocialMediaLink>
                    <SocialMediaLink href="https://linkedin.com/in/vlad-nicolaescu/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </SocialMediaLink>
                    <SocialMediaLink href="https://github.com/vladioannicolaescu/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </SocialMediaLink>
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
                        <SocialMediaLink href="https://www.facebook.com/VladIoanNicolaescu" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://www.instagram.com/vlad.nicolaescu/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="icon"/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://linkedin.com/in/vlad-nicolaescu/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://github.com/vladioannicolaescu/" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </SocialMediaLink>
                    </SidebarSocial>
                    
                </SidebarNav>
            </Sidebar>
        </>
    )
}


export default NavBar;