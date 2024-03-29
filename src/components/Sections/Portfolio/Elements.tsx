import styled from 'styled-components';

export const ProjectListing = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 50px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, auto);
    }
`;

export const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 30vw;

    @media screen and (max-width: 1000px) {
        width: 60vw
    }

    @media screen and (max-width: 500px) {
        width: 80vw
    }
`;

export const ProjectImage = styled.img`
    height: 350px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #fefefe;
    padding: 50px 20px;
    margin-top: -175px;
    width: 85%;
    border-radius: 50px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ProjectVisible = styled.div`
    height: 200px;
    postition: relative;

    @media screen and (max-width: 1050px) {
        height: 250px;
    }
`;

export const ProjectTitle = styled.h1`
    margin: 20px auto;
`;

export const ProjectOwner = styled.h3`
    margin: 5px auto;
`;

export const ProjectTechs = styled.h3`
    margin: 5px auto;
`;

export const Link = styled.a`
    margin-top: 25px;
    margin-bottom: 2.5px;
    padding-top: 10px;
    background: #000;
    color: #fff;
    height: 40px;
    width: 150px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    &:hover {
        background: #fff;
        color: #000;
    }
`;

export const MoreDetailsBtn = styled.button`
    margin-top: 2.5px;
    margin-bottom: 25px;
    background: #000;
    color: #fff;
    height: 40px;
    width: 150px;
    font-size: 1rem;
    border-radius: 10px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    
    &:hover {
        background: #fff;
        color: #000;
    }
`;

export const Details = styled.div``;

export const DetailsParagraph = styled.p`
    padding: 10px;
    font-family: 'Cantata One';
    font-size: 1.2rem;
    font-weight: 500;
`;
