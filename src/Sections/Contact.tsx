import React, {useState} from 'react';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';
import {HorizontalContainer, ContactForm, Subtitle, Box, BoxTitle, BoxInput, BoxMessage, ApprovalText, ApprovalSection, Checkbox, SendButton, AlertSuccess, AlertFail, AlertWarning} from '../components/Sections/Contact/Elements';
import './contact.css';
import emailjs, {init} from '@emailjs/browser';

function ContactSection() {

    const [successState, setSuccess] = useState(false);
    const [failState, setFail] = useState(false);
    const [warningState, setWarning] = useState(false);
    const [approvedCondition, setApprovedCondition] = useState(false);

    const approved = () => setApprovedCondition(!approvedCondition);

    async function sendEmail(e: { preventDefault: () => void; }) {
        if (!approvedCondition) {
            var form = document.getElementById("emailForm") as HTMLFormElement;
            form.reset();
            console.log("You need to check the box to submit the message");
            setWarning(true);
            setTimeout(function () {
                setWarning(false);
                console.log(warningState);
            }, 5000);
        } else {

            const userId = process.env.REACT_APP_USER_ID as string;
            const serviceId = process.env.REACT_APP_SERVICE_ID as string;
            const templateId = process.env.REACT_APP_TEMPLATE_ID as string;

            e.preventDefault();
            init(userId);
            emailjs.sendForm(serviceId, templateId, '#emailForm', process.env.REACT_APP_USER_ID)
                .then((result: { text: any; }) => {
                    var form = document.getElementById("emailForm") as HTMLFormElement;
                    form.reset();
                    console.log("Message Sent, We will get back to you shortly", result.text);
                    setSuccess(true);
                    setTimeout(function () {
                        setSuccess(false);
                    }, 5000);
                },
                    (error: { text: any; }) => {
                        setFail(true);
                        setTimeout(function () {
                            setFail(false);
                        }, 5000);
                        console.log("An error occurred, Please try again", error.text);
                }
            );
        }
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
                    <ContactForm id="emailForm" method="post">
                        <Box>
                            <BoxTitle>Name</BoxTitle>
                            <BoxInput placeholder="Name" id="name" name="name" required/>
                        </Box>
                        <Box>
                            <BoxTitle>Email</BoxTitle>
                            <BoxInput placeholder="Email" id="email" name="email" required/>
                        </Box>
                        <Box>
                            <BoxTitle>Message</BoxTitle>
                            <BoxMessage placeholder="Message" id="message" name="message" required/>
                        </Box>
                        <ApprovalSection>
                            <Checkbox type="checkbox" onClick={approved}/>
                            <ApprovalText>By sending this message, you accept that the personal data submitted may be used to contact you back.</ApprovalText>
                        </ApprovalSection>
                        <SendButton id="submitBtn" type="submit" onClick={sendEmail}>Send Message</SendButton>
                        <AlertSuccess id="alertSuccess" className={successState ? "form-visible" : "form-invisible"}>
                            <strong>Thank you!</strong> Your submission was successful!
                        </AlertSuccess>
                        <AlertFail id="alertFail" className={failState ? "form-visible" : "form-invisible"}>
                            <strong>Oops!</strong> Something went wrong. Please try again! 
                        </AlertFail>
                        <AlertWarning id="alertWarning" className={warningState ? "form-visible" : "form-invisible"}>
                            You need to approve personal data usage to be able to submit the message.
                        </AlertWarning>
                    </ContactForm> 
                </HorizontalContainer>

            </Container>
        </div>
    )
}

export default ContactSection;