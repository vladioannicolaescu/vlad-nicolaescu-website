import React from 'react';
import './portfolio.css';
import {} from '../components/Sections/Portfolio/Elements';
import {Container, TitleLine, DesignLine, Title} from '../components/utils/Elements';
import { Subtitle } from '../components/Sections/Home/Elements';

function PortfolioSection() {
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

            </Container>
        </div>
    )
}

export default PortfolioSection;