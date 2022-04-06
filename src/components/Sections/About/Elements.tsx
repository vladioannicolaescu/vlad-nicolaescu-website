import styled from 'styled-components';
import {FaAngleDown} from 'react-icons/fa';

export const Container = styled.div`
    padding: 100px 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
`;

export const DesrciptionLine = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        margin: 20px auto;
    }
`;

export const AboutMePicture = styled.img`
    width: 40vw;

    @media screen and (max-width: 1000px) {
        width: 80vw;
    }
`;

export const AboutMeIntro = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 80vw;
    }

    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`;

export const Text = styled.p`
    padding: 10px 50px;
    font-family: 'Cantata One';
    font-size: 1.5rem;
    font-weight: 500;
`;

export const ExtendButton = styled.button`
    margin: 50px auto;
    background: #000;
    color: #fff;
    height: 50px;
    width: 200px;
    font-size: 1.4rem;
    border-radius: 10px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
`;

export const MoreList = styled.div`
    width: 80vw;
    margin-top: 50px;
`;

export const Section = styled.div`
    padding: 20px;
    border-top: 2px solid #777;
`;

export const Unextended = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 50px;

    @media screen and (max-width: 500px) {
        padding: 0;
    }
`;

export const SectionTitle = styled.h1`
    font-weight: 500;
`;

export const DownArrow = styled(FaAngleDown)`
    color: #777;
    width: 50px;
    font-size: 1.5rem;
    right: 0;
`;

export const Extended = styled.div`
    margin: 25px auto;

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
`;

