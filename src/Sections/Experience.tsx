import React from 'react';
import './experience.css';
import {Container, Subtitle, HorizontalLine, Side, CompanyImage, CompanyInfo, Position, Period, Location} from '../components/Sections/Experience/Elements';
import {TitleLine, DesignLine, Title} from '../components/utils/Elements';

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
                <Container>
                    <HorizontalLine>
                        <Side>
                            <CompanyImage src="../images/GoogleLogo.png"/>
                        </Side>
                        <Side>
                            <CompanyInfo>
                                <Position>Software Engineer Intern</Position>
                                <Period>May 2022 - September 2022</Period>
                                <Location>Zurich, Switzerland</Location>
                            </CompanyInfo>
                        </Side>
                    </HorizontalLine>
                </Container>

                <Subtitle>Education</Subtitle>
                <Container>
                    <HorizontalLine>
                        <Side>
                            <CompanyImage src="../images/ImperialCollegeLogo.png"/>
                        </Side>
                        <Side>
                            <CompanyInfo>
                                <Position>Master Of Engineering in Computing</Position>
                                <Period>September 2019 - July 2023</Period>
                                <Location>London, UK</Location>
                            </CompanyInfo>
                        </Side>
                    </HorizontalLine>
                    <HorizontalLine>
                        <Side>
                            <CompanyImage src="../images/SavaLogo.png"/>
                        </Side>
                        <Side>
                            <CompanyInfo>
                                <Position>High School Diploma</Position>
                                <Period>September 2015 - July 2019</Period>
                                <Location>Bucharest, Romania</Location>
                            </CompanyInfo>
                        </Side>
                    </HorizontalLine>
                </Container>

            </Container>
        </div>
    )
}

export default ExperienceSection;