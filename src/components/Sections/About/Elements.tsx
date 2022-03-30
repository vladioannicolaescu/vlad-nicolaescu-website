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

export const TitleLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const DesignLine = styled.div`
    content: '';
    height: 2.5px;
    width: 100%;
    background: #000;
    margin: auto;
`;

export const Title = styled.h1`
    font-family: 'Cantata One';
    color: #000;
    display: inline-block;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 50px;
    white-space: nowrap;
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
`;

export const Subtitle = styled.h2`
    color: #000;
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 50px;

    @media screen and (min-width: 800px) {
        white-space: nowrap;
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
`;

export const SectionTitle = styled.h1`
    font-weight: 500;
`;

export const DownArrow = styled(FaAngleDown)`
    color: #777;
    height: 50px;
    right: 0;
`;

export const Extended = styled.div`
    margin: 25px auto;
`;

