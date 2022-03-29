import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 100;
`;

// export const NavLink = styled(Link)`
export const NavAnchor = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    letter-spacing: 0.5px;

    img {
        height: 80px;
    }

    &:hover {
        color: #ffffff88;
    }
`;


export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const CloseSign = styled(FaTimes)`
    display: none;
    color: #fff;

    @media screen and (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const SocialMediaLink = styled.a`
    border-radius: 4px;
    padding: 18px 7px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    translation: all 0.2 ease-in-out;
    text-decoration: none;

    .icon {
        height: 30px;
    }

    .icon:hover {
        color: #ffffff88;
    }
`;

export const SidebarNav = styled.div`
    position: fixed;
    background: #000;
    height: calc(100vh - 80px);
    width: 40vw;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 0;
    padding-top: 20vh;
    right: -100%;
    z-index: 100;

    .menu-link {
        justify-content: center;
        font-size: 2rem;
        height: 75px;
    }
`;

export const SidebarSocial = styled.div`
    margin: 100px auto;

    .icon {
        margin: 0 1vw;
        height: 5vw;
    }
`;

export const Sidebar = styled.div`
    .sidebar-active {
        top: 80px;
        right: 0;
        transition: 350ms;
        z-index: 9999;
    }

    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

