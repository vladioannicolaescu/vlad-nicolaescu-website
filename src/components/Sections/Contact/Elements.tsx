import styled from 'styled-components';

export const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Subtitle = styled.h2`
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 0 50px;
`;

export const ContactForm = styled.form`
    margin: 50px auto;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        width: 80vw;
    }
`;

export const Box = styled.div`
    width: 100%;
    margin: 10px auto;
    padding-left: 20%;
`;

export const BoxTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const BoxInput = styled.input`
    font-size: 1.5rem;
    padding: 10px;
    width: 80%;
`;

export const BoxMessage = styled.textarea`
    font-size: 1.5rem;
    padding: 10px;
    width: 80%;
    height: 150px;
    margin-bottom: 50px;
`;

export const ApprovalSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ApprovalText = styled.p`
    font-size: 1.5rem;
    margin: 10px 20px;
`;  

export const Checkbox = styled.input`
    transform: scale(1.75);
`;

export const SendButton = styled.button`
    margin: 50px auto;
    background: #000;
    color: #fff;
    height: 50px;
    width: 200px;
    font-size: 1.4rem;
    border-radius: 10px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
`;

export const AlertSuccess = styled.div`
    color: #28a745;
    background: #d4edda;
    width: 100%;
    height: 75px;
    border-radius: 10px;
    font-size: 1.5rem;
`;

export const AlertFail = styled.div`
    color: #dc3545;
    background: #f8d7da;
    width: 100%;
    height: 75px;
    border-radius: 10px;
    font-size: 1.5rem;
`;

export const AlertWarning = styled.div`
    color: #aa5502;
    background: #fff3cd;
    width: 100%;
    height: 75px;
    border-radius: 10px;
    font-size: 1.5rem;
`;