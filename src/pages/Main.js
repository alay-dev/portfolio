import React from 'react';
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

const Main = () => {
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
            <ProjectThumb></ProjectThumb>
            <ProjectThumb></ProjectThumb>
            <ProjectThumb></ProjectThumb>
            <ProjectThumb></ProjectThumb>
          </Projects>
        </RecentWorkContent>
        <img
          src={WaveBottomDesktop}
          style={{ objectPosition: 'top', marginTop: '-2rem' }}
        />
      </RecentWork>
      <Languages>
        <h2>Languages I Speak & skills</h2>

        <LanguageSection>
          <h3>Front-end</h3>
          <LanguageCardGrid>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
          </LanguageCardGrid>
        </LanguageSection>
        <LanguageSection>
          <h3>Back-end</h3>
          <LanguageCardGrid>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
          </LanguageCardGrid>
        </LanguageSection>
        <LanguageSection>
          <h3>Others</h3>
          <LanguageCardGrid>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
            <LanguageCard></LanguageCard>
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
