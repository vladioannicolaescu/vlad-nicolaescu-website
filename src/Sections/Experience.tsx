import React from 'react';
import './experience.css';
import {Container, AwardsLine, Subtitle, HorizontalLine, Side, Award, CompanyImage, CompanyInfo, Position, Period, Location, SkillsLine, SkillBox, SkillTitle, SkillLevel, SkillDescription, SkillImage} from '../components/Sections/Experience/Elements';
import {TitleLine, DesignLine, Title} from '../components/utils/Elements';
import {ProgrammingSkills, ProgrammingTools} from '../components/Skills';

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
                <Container>
                    <SkillsLine className="skillsList">
                        {ProgrammingSkills.map((item, index) => {
                            return (
                                <SkillBox key={item.key}>
                                    <SkillImage src={item.image}/>
                                    <SkillTitle>{item.title}</SkillTitle>
                                    <SkillLevel>Level: {item.level}</SkillLevel>
                                    <SkillDescription>{item.description}</SkillDescription>
                                </SkillBox>
                            );
                        })}
                    </SkillsLine>
                    <SkillsLine className="skillsList">
                        {ProgrammingTools.map((item, index) => {
                            return (
                                <SkillBox key={item.key}>
                                    <SkillImage src={item.image}/>
                                    <SkillTitle>{item.title}</SkillTitle>
                                    <SkillLevel className="tool">Level: {item.level}</SkillLevel>
                                </SkillBox>
                            );
                        })}
                    </SkillsLine>
                </Container>

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

                <Subtitle>Awards</Subtitle>
                <AwardsLine>
                    <Award>
                        <CompanyInfo>
                            <Position>Silver Medal - National Mathematics Olympiad</Position>
                            <Period>April 2011</Period>
                            <Location>Bistrita-Nasaud, Romania</Location>
                        </CompanyInfo>
                    </Award>
                    <Award>
                        <CompanyInfo>
                            <Position>Bronze Medals - National Mathematics Olympiad</Position>
                            <Period>April 2012, 2013</Period>
                            <Location>Sighisoara & Sibiu, Romania</Location>
                        </CompanyInfo>
                    </Award>
                    <Award>
                        <CompanyInfo>
                            <Position>Semi-finalist - First Tech Challenge Romania</Position>
                            <Period>March 2018</Period>
                            <Location>Bucharest, Romania</Location>
                        </CompanyInfo>
                    </Award>
                </AwardsLine>

            </Container>
        </div>
    )
}

export default ExperienceSection;