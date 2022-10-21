import React, { useState } from 'react';
import {
  Button,
  ConnectBtn,
  ConnectBtnCont,
  Footer,
  Form,
  FormFlex,
  FormWrapper,
  GetInTouch,
  Header,
  HeaderLeft,
  Hero,
  InputWrapper,
  LanguageCard,
  LanguageCardGrid,
  Languages,
  LanguageSection,
  MessageInput,
  Projects,
  ProjectThumb,
  ProjectThumbActive,
  RecentWork,
  RecentWorkContent,
  SkillCard,
  SkillFlex,
  Skills,
  Wrapper,
} from './Main.styles';
import AlayImg from '../assets/alay.jpg';
import Frontend from '../assets/frontend.gif';
import Backend from '../assets/backend.gif';
import WaveTopDesktop from '../assets/waveTopDesktop.svg';
import WaveTopMobile from '../assets/waveTopMobile.svg';
import WaveBottomDesktop from '../assets/waveBottomDesktop.svg';
import WaveBottomMobile from '../assets/waveBottomMobile.svg';
import GetInTouchImg from '../assets/getInTouch.gif';
import LinkedInImg from '../assets/linkedin.png';
import MailImg from '../assets/mail.png';
import ReactJsLogo from '../assets/reactJs.png';
import NextJsLogo from '../assets/nextJs.png';
import MuiLogo from '../assets/muiLogo.svg';
import SassLogo from '../assets/sass.png';
import CssLogo from '../assets/css.png';
import HtmlLogo from '../assets/html.png';
import AwsLogo from '../assets/aws.png';
import MongodbLogo from '../assets/mongodb.png';
import NodejsLogo from '../assets/nodeJs.png';
import ServerlessLogo from '../assets/serverless.png';
import SqlLogo from '../assets/sql.png';
import GolangLogo from '../assets/golang.png';
import JavascriptLogo from '../assets/javascript.png';
import ExpressJsLogo from '../assets/expressJs.png';
import CppLogo from '../assets/cpp.png';

const Main = () => {
  const [projectActive, setProjectActive] = useState(0);
  return (
    <Wrapper>
      <Header>
        <HeaderLeft>A.N</HeaderLeft>
        <HeaderLeft>
          <Button>Get In Touch</Button>
        </HeaderLeft>
      </Header>
      <Hero>
        <h1>Self Taught Full Stack Developer</h1>
        <p>
          Hi! I am Alay, I code beautifully simple things, and I love what I do.{' '}
        </p>
        <img src={AlayImg} />
      </Hero>
      <Skills>
        <SkillFlex>
          <SkillCard>
            <h2>Front-end development</h2>
            <p>
              Responsive websites built for an optimal user experience that
              achieves your business goals.
            </p>
          </SkillCard>
          <img src={Frontend} />
        </SkillFlex>
        <SkillFlex>
          <img src={Backend} />
          <SkillCard>
            <h2>Back-end development</h2>
            <p>
              Responsive websites built for an optimal user experience that
              achieves your business goals.
            </p>
          </SkillCard>
        </SkillFlex>
      </Skills>

      <RecentWork>
        <img
          src={WaveTopDesktop}
          style={{ objectPosition: 'bottom', marginBottom: '-6rem' }}
        />
        <RecentWorkContent>
          <h2>My Recent Work</h2>
          <p>Here are some of the projects i have worked on</p>
          <Projects>
            <ProjectThumb
              bg="#cddc39"
              onMouseEnter={() => setProjectActive(1)}
              onMouseLeave={() => setProjectActive(0)}
            >
              {projectActive === 1 ? (
                <ProjectThumbActive>
                  <a href="https://github.com/alay-dev/megastore-frontend">
                    <Button>View project</Button>
                  </a>
                </ProjectThumbActive>
              ) : (
                <>
                  <h3>Mega Store</h3>
                  <p>Grocery store web app</p>{' '}
                </>
              )}
            </ProjectThumb>
            <ProjectThumb
              bg="#64b5f6"
              onMouseEnter={() => setProjectActive(2)}
              onMouseLeave={() => setProjectActive(0)}
            >
              {' '}
              {projectActive === 2 ? (
                <ProjectThumbActive>
                  <a href="https://github.com/alay-dev/mycreativeside">
                    <Button>View project</Button>
                  </a>
                </ProjectThumbActive>
              ) : (
                <>
                  <h3>My Creative Side</h3>
                  <p>Blogging web app</p>
                </>
              )}
            </ProjectThumb>
            <ProjectThumb
              bg="#ef9a9a"
              onMouseEnter={() => setProjectActive(3)}
              onMouseLeave={() => setProjectActive(0)}
            >
              {' '}
              {projectActive === 3 ? (
                <ProjectThumbActive>
                  <a href="https://github.com/alay-dev/youtube-clone">
                    <Button>View project</Button>{' '}
                  </a>
                </ProjectThumbActive>
              ) : (
                <>
                  <h3>YouTube Clone</h3>
                  <p>Youtube clone </p>
                </>
              )}
            </ProjectThumb>
          </Projects>
        </RecentWorkContent>
        <img
          src={WaveBottomDesktop}
          style={{ objectPosition: 'top', marginTop: '-2rem' }}
        />
      </RecentWork>
      <Languages>
        <h2>Skills</h2>

        <LanguageSection>
          <h3>Front-end</h3>
          <LanguageCardGrid>
            <LanguageCard>
              <img src={ReactJsLogo} />
              <p>React Js</p>
            </LanguageCard>
            <LanguageCard>
              <img src={NextJsLogo} />
              <p>Next Js</p>
            </LanguageCard>
            <LanguageCard>
              <img src={HtmlLogo} />
              <p>HTML</p>
            </LanguageCard>
            <LanguageCard>
              <img src={CssLogo} />
              <p>CSS</p>
            </LanguageCard>
            <LanguageCard>
              <img src={JavascriptLogo} />
              <p>Javascript</p>
            </LanguageCard>
            <LanguageCard>
              <img src={SassLogo} />
              <p>Sass</p>
            </LanguageCard>
            <LanguageCard>
              <img src={MuiLogo} />
              <p>Material UI</p>
            </LanguageCard>
          </LanguageCardGrid>
        </LanguageSection>
        <LanguageSection>
          <h3>Back-end</h3>
          <LanguageCardGrid>
            <LanguageCard>
              <img src={NodejsLogo} />
              <p>Node Js</p>
            </LanguageCard>
            <LanguageCard>
              <img src={ExpressJsLogo} />
              <p>Express Js</p>
            </LanguageCard>
            <LanguageCard>
              <img src={JavascriptLogo} />
              <p>Javascript</p>
            </LanguageCard>
            <LanguageCard>
              <img src={MongodbLogo} />
              <p>Mongo DB</p>
            </LanguageCard>
            <LanguageCard>
              <img src={SqlLogo} />
              <p>SQL</p>
            </LanguageCard>
            <LanguageCard>
              <img src={AwsLogo} />
              <p>AWS</p>
            </LanguageCard>
            <LanguageCard>
              <img src={ServerlessLogo} />
              <p>Serverless</p>
            </LanguageCard>
          </LanguageCardGrid>
        </LanguageSection>
        <LanguageSection>
          <h3>Others</h3>
          <LanguageCardGrid>
            <LanguageCard>
              <img src={GolangLogo} />
              <p>Go lang</p>
            </LanguageCard>
            <LanguageCard>
              <img src={CppLogo} />
              <p>C++</p>
            </LanguageCard>
          </LanguageCardGrid>
        </LanguageSection>
      </Languages>
      <GetInTouch>
        <h2>Thanks for visiting. How can i help you?</h2>
        <p>Send a general message.</p>
        <FormWrapper>
          <Form>
            <FormFlex>
              <InputWrapper>
                <label>Name</label>
                <input />
              </InputWrapper>
              <InputWrapper>
                <label>Email</label>
                <input />
              </InputWrapper>
            </FormFlex>
            <InputWrapper style={{ marginTop: '1rem' }}>
              <label>Message</label>
              <MessageInput rows={10} />
            </InputWrapper>

            <Button>Submit</Button>
          </Form>
          <img src={GetInTouchImg} />
        </FormWrapper>
      </GetInTouch>
      <Footer>
        <h1>A.N</h1>

        <ConnectBtnCont>
          <ConnectBtn>
            <img src={LinkedInImg} />
          </ConnectBtn>
          <ConnectBtn>
            <img src={MailImg} />
          </ConnectBtn>
        </ConnectBtnCont>
      </Footer>
    </Wrapper>
  );
};

export default Main;
