import React from 'react';
import './experience.css';
import {} from '../components/Sections/Portfolio/Elements';
import {Container, TitleLine, DesignLine, Title, Subtitle} from '../components/utils/Elements';

function ExperienceSection() {
    return (
        <div id="experience">
            <Container>
                <TitleLine>
                    <DesignLine/>
                    <Title id="title">
                        Skills & Experience
                    </Title>
                    <DesignLine/>
                </TitleLine>

                <Subtitle>Skills & Tools</Subtitle>
                <Subtitle>Companies</Subtitle>
                <Subtitle>Education</Subtitle>

            </Container>
        </div>
    )
}

export default ExperienceSection;