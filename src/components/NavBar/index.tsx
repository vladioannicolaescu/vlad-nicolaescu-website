import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, SocialMediaLink, SidebarNav, SidebarSocial, Sidebar, CloseSign} from './Elements'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SectionLinks, SocialMediaLinks} from './Links';

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
                    {SectionLinks.map((item, index) => {
                        return (
                            <NavLink to={item.path}>
                                {item.title}
                            </NavLink>
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
                            <NavLink to={item.path} className="menu-link" onClick={showSidebar}>
                                {item.title}
                            </NavLink>
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
        </>
    )
}


export default NavBar;