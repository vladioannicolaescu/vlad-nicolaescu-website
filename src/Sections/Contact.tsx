import React from 'react';
import './contact.css';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';

function ContactSection() {
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
            </Container>
        </div>
    )
}

export default ContactSection;