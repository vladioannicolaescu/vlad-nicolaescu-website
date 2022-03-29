import React from 'react';
import './home.css';
import {LandingPicture, LandingPictureCover, Motto, TitleGroup, TitleLine, DesignLine, Title, Subtitle, Locations, Location, Dot} from '../components/Sections/Home/Elements';
import Typewriter, { TypewriterClass } from "typewriter-effect";

function HomeSection() {
    return (
        <div id="home">
            <LandingPicture>
                <LandingPictureCover>
                    <Motto>
                        Dream it. Believe it. Do it.
                    </Motto>
                    <TitleGroup>
                        <TitleLine>
                            <DesignLine/>
                            <Title id="title">
                                <Typewriter 
                                    onInit={(typewriter) => {
                                        typewriter
                                        .typeString("Hello, I'm Vlad ... ")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Vlad Nicolaescu")
                                        .start();
                                    }}/>
                            </Title>
                            <DesignLine/>
                        </TitleLine>
                        <Subtitle>
                            Software Engineering Intern - Google
                        </Subtitle>
                        <Subtitle>
                            Final Year MEng Student - Imperial College London
                        </Subtitle>
                        <img src="../images/image-removebg-preview.png" alt="" />
                        <Locations>
                            <Location>
                                London
                            </Location>
                            <Dot/>
                            <Location>
                                Bucharest
                            </Location>
                            <Dot/>
                            <Location>
                                Zurich
                            </Location>
                        </Locations>
                    </TitleGroup>
                </LandingPictureCover>
            </LandingPicture>
        </div>
    )
}

export default HomeSection;