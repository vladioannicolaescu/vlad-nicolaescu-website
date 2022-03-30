import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
`;

export const AwardsLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const HorizontalLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 2px solid #555;
    padding: 30px 0;
    margin: 25px 0;
    background: #eeeeee;
    border-radius: 10px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Side = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;

    @media screen and (max-width: 1000px) {
        width: 80vw;
    }
`;

export const Subtitle = styled.h2`
    color: #000;
    display: inline-block;
    text-align: center;
    font-size: 2.2rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 50px;

    @media screen and (min-width: 800px) {
        white-space: nowrap;
    }
`;

export const CompanyImage = styled.img`
    height: 100px;
    margin: 10px auto;
`;

export const CompanyInfo = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
`;

export const Position = styled.h1`
    font-weight: 600;
`;

export const Period = styled.h2`
    font-weight: 500;
`;

export const Location = styled.h3`
    font-weight: 500;
`;

export const Award = styled.div`
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid #555;
    padding: 30px 0;
    margin: 25px calc(5vw / 6);
    background: #eeeeee;
    border-radius: 10px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.3rem;
    }

    h3 {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 80vw;
    }
`;
