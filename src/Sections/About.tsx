import React, {useState} from 'react';
import './about.css';
import {DesrciptionLine, AboutMePicture, AboutMeIntro, Text, ExtendButton, MoreList, Section, SectionTitle, DownArrow, Unextended, Extended} from '../components/Sections/About/Elements'; 
import {Container, TitleLine, DesignLine, Title, Subtitle} from '../components/utils/Elements';

function AboutSection() {

    const [moreBtnPressed, setMoreBtn] = useState(false);

    const [educationExtended, setEducation] = useState(false);
    const [experienceExtended, setExperience] = useState(false);
    const [visionExtended, setVision] = useState(false);
    const [sportsExtended, setSports] = useState(false);
    
    const moreSection = () => setMoreBtn(!moreBtnPressed);

    const educationSection = () => setEducation(!educationExtended);
    const experienceSection = () => setExperience(!experienceExtended);
    const visionSection = () => setVision(!visionExtended);
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
                    <AboutMeIntro>
                        <Subtitle>
                            About Me
                        </Subtitle>
                        <Text>
                            I am a hard-working computing student, aiming to push myself to the limits and learn as much as possible. I am passionate about developing Web and Mobile applications, Machine Learning, Robotics, and Computer Vision. Although I have 10+ years of experience in C/C++, my favorite programming language is Java, as I enjoy working at a higher level and using Object-Oriented Programming.
                        </Text>
                        <Text>
                            I have worked on several projects, both individually and in teams, which include creating a framework for a Voice Assistent (adding hot-word detection functionality), writing an Operating System (PintOS), writing a Compiler, building software for robots, and building real-time user-interactive applications.
                        </Text>
                        <ExtendButton onClick={moreSection}>
                            More About Me
                        </ExtendButton>
                    </AboutMeIntro>
                    <AboutMePicture src="../images/summer-2015-removebg.png"/>
                </DesrciptionLine>

                <MoreList className={moreBtnPressed ? 'section-active' : 'section-closed'}>
                    <Section>
                        <Unextended onClick={educationSection}>
                            <SectionTitle>Education</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={educationExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                I went to Primary & Secondary School at Pro Ingenio, in Bucharest, Romania. I took my first programming course at only eight years old, as an extracurricular course. I had the opportunity to code in Pascal for two years (and even went to a couple of competitions) and then switched to C++ from fourth grade for the Informatics Olympiad. I participated three times in the Informatics Olympiad, once even qualified for the National phase, where unfortunately I could not be present due to overlapping with the Mathematics Olympiad. Speaking of which, Mathematics was the subject I was best in Secondary School (way better than in programming). I qualified for the National Mathematics Olympiad four years in a row, winning a total of one silver medal and two bronze medals. I would like to say a special thank you to prof. Lavinia Marica (Mathematics), prof. Traian Preda (Mathematics) and prof. Valentina Preda (Programming) for all their support and dedication in all these years!
                            </Text>
                            <Text>
                                I completed High School at Saint Sava National College, also in Bucharest, Romania. Saint Sava is the oldest and one of the most prestigious schools in the country. I developed in an environment hungry for performance in every field, where I had the honor to be taught by experienced, world-class professors. I graduated having an overall GPA of 4.0, obtaining 10/10 in Mathematics and 9.8/10 in Programming (C++) at the Romanian Baccalaureate. Throughout my High School years, I continued coding. I expanded my knowledge in languages like C or C++ and I started learning Java and SQL basics, completing Oracle courses for both of them. I was part of the robotics team for the last three years, being a Software Developer and a Robot Driver/Coach at competitions (more about this in the experience section below).
                            </Text>
                            <Text>
                                Being accepted by Imperial College London as a student in the Computing Department and meeting the entry requirements was one of the most important performances I have ever realized, as Imperial is constantly being ranked in the top 10 universities in the World. Moreover, immediately after starting the studies here, I was convinced that this is not just a meaningless statistic. The quality of both the teaching and the content of the courses is so high that I cannot even recall everything I learn, I just try to expose the most important ones. On the first day of college, my tutor told me that "at Imperial, you will have to learn in the first years what most other students learn in 5 years", and as terrifying as it may have sounded at first, as rewarding it is now (and I am not even half-way through the course).
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
                                Although not having proper experience of working in a company yet, personal and college projects, alongside other volunteer work I did, gave me more than just a flavor of what the technology industry requires. I have experience of both working alone or in a team (of different sizes) and in small or large projects, classified by the time taken to complete, lines of code written, and complexity.
                            </Text>
                            <Text>
                                Besides these, I believe that that the projects and the volunteer work that required very little to no programming at all played an important part in my development as well. I was a member of the Interact Club from Saint Sava for 3 years, in the last one being the vice-president of the Club. Interact Clubs are Rotary Sponsored, non-governmental, non-profit organizations that raise money for charity by organizing different kinds of events. Being in this club helped me develop communication skills by having regular group meetings and leading discussions while being vice-president, negotiating abilities by trying to get the most out of a low budget when organizing events and by talking to sponsors, and also time management skills by having to efficiently balance the amount of time invested in school and extracurricular activities.
                            </Text>
                            <Text>
                                Furthermore, I did volunteer work for the Romanian Tennis Federation, at the local WTA tournament, and Fed Cup ties. I worked in the credential office, being in-charge of player, staff, and media credentials. During my time there, I developed Adobe Photoshop skills and I worked under-pressure as WTA players and Officials were always in a hurry and their time spent in the credential office was supposed to be as small as possible. Apart from these, I had the opportunity to meet the players and to stay close to them, getting a taste of what it is like to be on tour. Tennis is one of my biggest passions, and having this experience meant even more taking this into account.
                            </Text>
                        </Extended>
                    </Section>
                    <Section>
                        <Unextended onClick={visionSection}>
                            <SectionTitle>Vision & Personal Values</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={visionExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                I am a young, enthusiastic person, looking at life with optimism and hope. I believe that each one of us can have an impact on society, no matter how small we may think we are. I understand the power that technology has, and by working in this field, you can have an impact on almost anything you can imagine, from education, politics, finance, transport, sports, or medicine.
                            </Text>
                            <Text>
                                Respect is the word that sums up all my values. I try to respect everything I do and everyone I meet, and from this, all the other values are derived. If you respect your job or your business, you must be professional, caring, involved, hardworking, otherwise, you are just wasting your time. If you respect other people, it means that you respect your promises, listen to what they have to say, and help them when they need it. Punctuality is also important when we talk about anything or anyone, and I do believe that any integer person should be punctual as much as possible. I like people who do not give up, who get hit, fall and then get up stronger, and I am trying to become such a person. Furthermore, I would like to add one of my favorite quotes here, that in my opinion describes the society we live in: "Fast success builds ego. Slow success builds character". I am someone who has always been looking for long-term success, and who has always valued patience. However, as Roger Federer said, "You have to believe in the long term plan, but you need the short term goals to motivate and inspire you". This is why I started to find happiness, satisfaction in little events happening daily or at most weekly, to have the power to move on with confidence and optimism, especially in the hard times we are all living in.
                            </Text>                            
                        </Extended>
                    </Section>
                    <Section>
                        <Unextended onClick={sportsSection}>
                            <SectionTitle>Sports</SectionTitle>
                            <DownArrow/>
                        </Unextended>
                        <Extended className={sportsExtended ? 'section-active' : 'section-closed'}>
                            <Text>
                                I have practiced tennis since I was eight years old, and I am still playing at a reasonably high level. I am part of the Imperial Tennis teams, having played BUCS Level tennis while being in London. However, spending most of my time at school or learning, I was not able to play competitive tennis until going to college. I was so ambitious as I wanted to win all the time, so I couldn't have started a tournament without chances of winning and a rigorous preparation before, which unfortunately required much more time than it was available. I enjoy watching tennis as well, I am a big fan of Roger Federer, Rafael Nadal, and Dominic Thiem, and I was extremely lucky to have seen them play live at the ATP Finals 2019 in London.
                            </Text>
                            <Text>
                                Besides tennis, I love football. Although I have not played in an academy or at a professional team, I try to find the time and play regularly with friends. I am a huge fan of the local team Steaua Bucharest(FCSB), as I was watched them play ever since I was 4, 5 years old. I also support FC Barcelona and Tottenham Hotspur, being in London allowing me to become a One Hotspur Member and have access to match tickets.
                            </Text> 
                        </Extended>
                    </Section>
                </MoreList>

            </Container>
        </div>
    )
}

export default AboutSection;