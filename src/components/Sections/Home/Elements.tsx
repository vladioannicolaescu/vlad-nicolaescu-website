import styled from 'styled-components'

export const LandingPicture = styled.div`
    background: url(${process.env.PUBLIC_URL + "./images/cambridge.png"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    background-attachment: fixed;
    height: 100vh;
`;

export const LandingPictureCover = styled.div`
    background: rgb(0, 0, 0, 0.75);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 150px;
    padding-bottom: 150px;
`;

export const Motto = styled.h1`
    font-family: 'Courier New';
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
`;

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 5vw;

    img {
        height: 300px;
    }

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
    background: #fff;
    margin: auto;
`;

export const Title = styled.h1`
    font-family: 'Courier New';
    color: white;
    display: inline-block;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 50px;

    @media screen and (min-width: 800px) {
        white-space: nowrap;
    }
`;

export const Subtitle = styled.h2`
    font-family: 'Geneva';
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 500;
`;

export const Locations = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
`;

export const Location = styled.h2`
    color: white;
    margin: 10px 20px; 
    font-weight: 500;
    font-size: 2rem;
`;

export const Dot = styled.div`
    content: '';
    height: 8px;
    width: 8px;
    background: #fff;
    border-radius: 50%;
`;