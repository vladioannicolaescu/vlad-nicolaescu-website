import React from 'react';
import './experience.css';
import {} from '../components/Sections/Portfolio/Elements';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';
import { Subtitle } from '../components/Sections/Home/Elements';

function ExperienceSection() {
    return (
        <div id="experience">
            <Container>
                <TitleLine>
                    <DesignLine/>
                    <Title id="title">
                        Experience
                    </Title>
                    <DesignLine/>
                </TitleLine>

            </Container>
        </div>
    )
}

export default ExperienceSection;