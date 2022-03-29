import React, {useState} from 'react';
import {Nav, NavAnchor, Bars, NavMenu, NavBtn, SocialMediaLink, SidebarNav, SidebarSocial, Sidebar, CloseSign} from './Elements'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SectionLinks, SocialMediaLinks} from '../Links';

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function smoothScroll(event: { preventDefault: () => void; }, elemId: string) {
        let elem = document.getElementById(elemId);
        event.preventDefault();
        elem && elem.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    return (
        <div className="navigation">
            <Nav>
                <NavAnchor href ="#home" onClick={e => smoothScroll(e, "home")}>
                    <img src={require("../../images/image-removebg-preview.png")} alt="logo" />
                </NavAnchor>
                {!sidebar ? <Bars onClick={showSidebar}/> : <CloseSign onClick={showSidebar}/>}
                <NavMenu>
                    {SectionLinks.map((item, index) => {
                        return (
                            <NavAnchor href={item.path} onClick={e => smoothScroll(e, item.path.substr(1))}>
                                {item.title}
                            </NavAnchor>
                        );
                    })}
                </NavMenu>
                <NavBtn>
                    {SocialMediaLinks.map((item, index) => {
                            return (
                                <SocialMediaLink href={item.href} target="_blank">
                                    <FontAwesomeIcon icon={item.icon} className="icon"/>
                                </SocialMediaLink>
                            );
                    })}
                </NavBtn>
            </Nav>

            <Sidebar>
                <SidebarNav className={sidebar ? 'sidebar-active' : 'sidebar'}>
                    {SectionLinks.map((item, index) => {
                        return (
                            <NavAnchor href={item.path} className="menu-link" onClick={e => {
                                    showSidebar();
                                    smoothScroll(e, item.path.substr(1));
                                }}>
                                    {item.title}
                            </NavAnchor>
                        );
                    })}

                    <SidebarSocial>
                        {SocialMediaLinks.map((item, index) => {
                            return (
                                <SocialMediaLink href={item.href} target="_blank">
                                    <FontAwesomeIcon icon={item.icon} className="icon"/>
                                </SocialMediaLink>
                            );
                        })}
                    </SidebarSocial>
                    
                </SidebarNav>
            </Sidebar>
        </div>
    )
}


export default NavBar;