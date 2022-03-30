import styled from 'styled-components';

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
