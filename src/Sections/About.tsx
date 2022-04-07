import React, {useState} from 'react';
import './about.css';
import {DesrciptionLine, AboutMePicture, AboutMeIntro, Text, ExtendButton, MoreList, Section, SectionTitle, DownArrow, Unextended, Extended} from '../components/Sections/About/Elements'; 
import {Container, TitleLine, DesignLine, Title, Subtitle} from '../components/utils/Elements';
import { Slide } from "react-awesome-reveal";

function AboutSection() {

    const [moreBtnPressed, setMoreBtn] = useState(false);

    const [educationExtended, setEducation] = useState(false);
    const [experienceExtended, setExperience] = useState(false);
    // const [visionExtended, setVision] = useState(false);
    const [sportsExtended, setSports] = useState(false);
    
    const moreSection = () => setMoreBtn(!moreBtnPressed);

    const educationSection = () => setEducation(!educationExtended);
    const experienceSection = () => setExperience(!experienceExtended);
    // const visionSection = () => setVision(!visionExtended);
    const sportsSection = () => setSports(!sportsExtended);

    return (
        <div id="about">
            <Container>
                <TitleLine>
                    <DesignLine/>
                    <Title id="title">
                        Who am I?
                    </Title>
                    <DesignLine/>
                </TitleLine>

                <DesrciptionLine>
                    <Slide triggerOnce direction="left" duration={1000}>
                    <AboutMeIntro>
                            <Subtitle>
                                About Me
                            </Subtitle>
                        <Text>
                            I am a hard-working computing student, hungry for knowledge, and eager to develop my skills in multiple areas. I am passionate about Web and Mobile Application Development, Machine Learning (both Supervised and Unsupervised Learning, including Neural Networks and Clustering Algorithms), Robotics, and Computer Vision. I love learning new skills and technologies, and I enjoy challenges that get me out of my comfort zone.
                        </Text>
                        <Text>
                            I have worked on several projects which taught me valuable skills in my areas of interest. One of my favorite assignments was developing a fish classifier using a Convolutional Neural Network, which increased my understanding of Computer Vision algorithms. 
                        </Text>
                        <Text>
                            Moreover, I built a framework for the Voice Assistant of the Global Data Observatory at Imperial College, which adds hot-word detection functionality. I have also written an Operating System (PintOS) and a Compiler for the WACC programming language during my second year in college. Finally, I am enthusiastic about my Mobile Application and Web Development projects, which I invite you to check out in the <a href="#portfolio">Portfolio Section</a>.
                        </Text>
                        <ExtendButton onClick={moreSection}>
                            More About Me
                        </ExtendButton>
                    </AboutMeIntro>
                    </Slide>
                    <Slide triggerOnce direction="right" duration={1000}>
                        <AboutMePicture src="../images/summer-2015-removebg.png"/>
                    </Slide>
                </DesrciptionLine>

                <MoreList className={moreBtnPressed ? 'section-active' : 'section-closed'}>
                    <Section>
                        <Unextended onClick={educationSection}>
                            <SectionTitle>Education</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={educationExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                My first contact with coding was at eight years old when I took an extracurricular programming course at "Pro Ingenio School" in Bucharest, Romania. The language I started with was Pascal, which I studied for two years. In the fourth grade, I switched to C++ to be able to participate in the Informatics Olympiad, where I reached my peak in the seventh grade qualifying for the National Stage. However, during primary and secondary school, Mathematics was my favorite subject. I have qualified for the National Stage of the Olympiad four times, winning a Silver Medal and two Bronze Medals. I want to thank prof Lavinia Marica (Mathematics), prof Traian Preda (Mathematics), and prof Valentina Preda (Programming) for all their support and dedication. I know that a big part of these performances is their credit.
                            </Text>
                            <Text>
                                I finished High School at "Saint Sava National College" in Bucharest, Romania. "Saint Sava" is the oldest and one of the most prestigious schools in the country. I developed in an environment hungry for performance in every field, where I had the honor to be taught by experienced, world-class professors. I graduated having an overall GPA of 4.0, obtaining 10/10 in Mathematics and 9.8/10 in Programming (C++) at the Romanian Baccalaureate. Throughout my High School years, I continued coding. I expanded my knowledge in languages like C or C++, and I started learning Java and SQL basics, completing Oracle courses for both of them. I was part of the robotics team for the last three years, being a Software Developer and a Robot Driver/Coach at competitions (more about this in the experience section below).
                            </Text>
                            <Text>
                                The opportunity to study at Imperial College London in the Computing Department is a notable achievement for me. As soon as I came here, I understood why this university is among the Top 10 Best Universities in the World. The quality of both the teaching and the content of the lectures is remarkable. Most of the provided courses are helpful, and I repeatedly recall the knowledge taught when working on Software Development projects. The best part of this degree is, in my opinion, the adaptability to new programming languages and technologies that you get without stepping too far from your comfort zone.
                            </Text>
                        </Extended>
                    </Section>
                    <Section>
                        <Unextended onClick={experienceSection}>
                            <SectionTitle>Experience</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={experienceExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                I am looking forward to my first experience in a company. I will be joining Google in May 2022 as a Software Engineer Intern in Zurich. I am eager to make the most out of my time there and learn as much as possible while doing my job professionally and delivering the best product. I will work in the Privacy and Security team, and my project will include full-stack development.
                            </Text>
                            <Text>
                                In a college environment, I have experience working alone or in a team (of different sizes) and in small or large projects, classified by the time taken to complete, lines of code written, and complexity. I invite you to check my projects in the <a href="#portfolio">Portfolio Section</a> below.
                            </Text>
                            <Text>
                                I was a member of the Interact Club from Saint Sava for three years, the last one being the club's vice-president. Interact Clubs are Rotary Sponsored, non-governmental, non-profit organizations that raise money for charity by organizing various events.
                            </Text>
                            <Text>
                                Furthermore, I did volunteer work for the Romanian Tennis Federation at the local WTA tournament and Fed Cup ties. I worked in the credential office, where I was in charge of players, staff, and media credentials. I had the opportunity to meet the players and stay close to them. Tennis is one of my biggest passions, and having this experience meant even more taking this into account.
                            </Text>
                        </Extended>
                    </Section>
                    {/* <Section>
                        <Unextended onClick={visionSection}>
                            <SectionTitle>Vision & Personal Values</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={visionExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                Respect is the word that sums up all my values. I try to respect everything I do and everyone I meet, and from this, all the other values are derived. If you respect your job or your business, you must be professional, caring, involved, hardworking, otherwise, you are just wasting your time. If you respect other people, it means that you respect your promises, listen to what they have to say, and help them when they need it. Punctuality is also important when we talk about anything or anyone, and I do believe that any integer person should be punctual as much as possible. I like people who do not give up, who get hit, fall and then get up stronger, and I am trying to become such a person. Furthermore, I would like to add one of my favorite quotes here, that in my opinion describes the society we live in: "Fast success builds ego. Slow success builds character". I am someone who has always been looking for long-term success, and who has always valued patience. However, as Roger Federer said, "You have to believe in the long term plan, but you need the short term goals to motivate and inspire you". This is why I started to find happiness, satisfaction in little events happening daily or at most weekly, to have the power to move on with confidence and optimism, especially in the hard times we are all living in.
                            </Text>                            
                        </Extended>
                    </Section> */}
                    <Section>
                        <Unextended onClick={sportsSection}>
                            <SectionTitle>Sports</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={sportsExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                I started playing tennis when I was eight years old, and I am still playing at a reasonably high level. I am part of the Imperial Tennis teams, having played BUCS Level tennis. However, spending most of my time at school or learning, I could not play competitive tennis until going to college. I enjoy watching tennis as well. I am a big fan of Roger Federer, Rafael Nadal, and Dominic Thiem. I was extremely lucky to have seen them play live at the ATP Finals 2019 in London.
                            </Text>
                            <Text>
                                Besides tennis, I love football. Although I have not played in an academy or a professional team, I try to find the time and play regularly with friends. I am a huge fan of the local team Steaua Bucharest (FCSB), as I was watched them play ever since I was 4 - 5 years old. I also support FC Barcelona and Tottenham Hotspur. Staying in London allows me to become a One Hotspur Member and have access to match tickets, which I attend with every opportunity.
                            </Text> 
                        </Extended>
                    </Section>
                </MoreList>

            </Container>
        </div>
    )
}

export default AboutSection;