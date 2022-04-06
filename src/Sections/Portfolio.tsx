import React, {useState} from 'react';
import './portfolio.css';
import {} from '../components/Sections/Portfolio/Elements';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';
import {ProjectListing, ProjectBox, ProjectImage, ProjectInfo, ProjectVisible, ProjectTitle, ProjectOwner, ProjectTechs, MoreDetailsBtn, Details, DetailsParagraph} from '../components/Sections/Portfolio/Elements';
import {ProjectList} from '../components/Projects';

function PortfolioSection() {

    const [moreDetails, setDetailsStates] = useState(0);

    const moreDetailsPressed = (index: number) => index !== moreDetails ? setDetailsStates(index) : setDetailsStates(0);

    return (
        <div id="portfolio">
            <Container>
                <TitleLine>
                    <DesignLine/>
                    <Title id="title">
                        Portfolio
                    </Title>
                    <DesignLine/>
                </TitleLine>

                <ProjectListing>
                    {ProjectList.map((item, index) => {
                        return (
                            <ProjectBox key={item.key}>
                                <ProjectImage src={item.image}/>
                                <ProjectInfo>
                                    <ProjectVisible>
                                        <ProjectTitle>{item.title}</ProjectTitle>
                                        <ProjectOwner>{item.owner}</ProjectOwner>
                                        <ProjectTechs>Techs: {item.techs}</ProjectTechs>
                                    </ProjectVisible>
                                    <MoreDetailsBtn onClick={() => moreDetailsPressed(item.key)}>More Details</MoreDetailsBtn>
                                    <Details className={item.key === moreDetails ? "visible" : "invisible"}>
                                        {item.details.map((paragraph, index) => {
                                            return (
                                                <DetailsParagraph key={item.key * 100 + index}>{paragraph}</DetailsParagraph>
                                            )
                                        })}
                                    </Details>
                                </ProjectInfo>
                            </ProjectBox>
                        );
                    })}
                </ProjectListing>

            </Container>
        </div>
    )
}

export default PortfolioSection;