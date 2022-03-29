import React from 'react';
import {Footer, SocialMedia, SocialMediaLink, Copyright, TextLine, Cookies, CookiesTitle} from './Elements';
import {SocialMediaLinks} from '../Links';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const FooterBar = () => {
    return (
        <div className="footer">
            <Footer>
                <SocialMedia>
                    {SocialMediaLinks.map((item, index) => {
                            return (
                                <SocialMediaLink href={item.href} target="_blank">
                                    <FontAwesomeIcon icon={item.icon} className="icon"/>
                                </SocialMediaLink>
                            );
                    })}
                </SocialMedia>
                <Copyright>
                    <TextLine>
                        Copyright
                        <FontAwesomeIcon icon={faCopyright} className="copyright-icon"/>
                        2022 Vlad-Ioan Nicolaescu. All rights reserved.
                    </TextLine>
                    <TextLine>
                        Images & icons are either from personal sources or free licensed.
                    </TextLine>
                </Copyright>
                <Cookies>
                    <CookiesTitle>
                        Cookies & Data Privacy
                    </CookiesTitle>
                    <TextLine>
                        This webpage does not use any particular cookies. Any cookies used belong to the browser that you are using and should have already been accepted.
                    </TextLine>
                    <TextLine>
                        Any data collected is only for contact purposes and will not be stored anywhere.
                    </TextLine>
                </Cookies>
            </Footer>
        </div>
    )
}


export default FooterBar;