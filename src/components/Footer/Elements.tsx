import styled from 'styled-components'

export const Footer = styled.div`
    background: #000;
    color: white;
    padding-top: 15px;
    padding-bottom: 30px;
`;

export const SocialMedia = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialMediaLink = styled.a`
    border-radius: 4px;
    padding: 18px 15px;
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

export const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px auto;

    .copyright-icon {
        margin: 0 5px;
    }
`;

export const TextLine = styled.div`
    margin: 5px auto;
    text-align: center;
`;

export const Cookies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    align-text: center;
`;

export const CookiesTitle = styled.h3`
    margin: 5px;
`;

