import React, {useState} from 'react';
import './contact.css';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';
import {HorizontalContainer, ContactForm, Subtitle, Box, BoxTitle, BoxInput, BoxMessage, ApprovalText, ApprovalSection, Checkbox, SendButton, AlertSuccess, AlertFail} from '../components/Sections/Contact/Elements';

function ContactSection() {

    const [successState, setSuccess] = useState(false);
    const [failState, setFail] = useState(false);

    const formSent = () => setSuccess(!successState);
    const formFail = () => setFail(!failState);

    function sendEmail() {
        var form = document.getElementById("emailForm") as HTMLFormElement;

        console.log("Submitting ...");

        function success() {
            form.reset();
            formSent();
        }

        function error() {
            formFail();
        }

        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    }

    function ajax(method: string, 
                    url: string, 
                    data: any, 
                    success: (arg0: any, arg1: string) => void, 
                    error: (arg0: number, arg1: any, arg2: string) => void) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) 
            return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
        };
        xhr.send(data);
    }

    return (
        <div id="contact">
            <Container>
                <TitleLine>
                    <DesignLine/>
                    <Title id="title">
                        Contact
                    </Title>
                    <DesignLine/>
                </TitleLine>
                <Subtitle>Interested in collaborations with companies and individuals for any Software Development projects.</Subtitle>
                <Subtitle>Please feel free to contact me.</Subtitle>
                <HorizontalContainer>
                    <ContactForm id="emailForm" action="https://formspree.io/f/xknpybkb" method="post">
                        <Box>
                            <BoxTitle>Name</BoxTitle>
                            <BoxInput placeholder="Name" id="name" required/>
                        </Box>
                        <Box>
                            <BoxTitle>Email</BoxTitle>
                            <BoxInput placeholder="Email" id="email" required/>
                        </Box>
                        <Box>
                            <BoxTitle>Message</BoxTitle>
                            <BoxMessage placeholder="Message" id="message" required/>
                        </Box>
                        <ApprovalSection>
                            <Checkbox type="checkbox"/>
                            <ApprovalText>By sending this message, you accept that the personal data submitted may be used to contact you back.</ApprovalText>
                        </ApprovalSection>
                        <SendButton id="submitBtn" type="submit" onClick={sendEmail}>Send Message</SendButton>
                        <AlertSuccess id="alertSuccess" className={successState ? "form-visible" : "form-invisible"}>
                            <strong>Thank you!</strong> Your submission was successful!
                        </AlertSuccess>
                        <AlertFail id="alertFail" className={failState ? "form-visible" : "form-invisible"}>
                            <strong>Oops!</strong> Something went wrong. Please try again! 
                        </AlertFail>
                    </ContactForm> 
                </HorizontalContainer>

            </Container>
        </div>
    )
}

export default ContactSection;