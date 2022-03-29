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
`