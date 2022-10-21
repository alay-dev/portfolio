import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }
`;

export const HeaderRight = styled.div``;

export const HeaderLeft = styled.div`
  font-size: 4.5rem;
  font-family: 'Fuzzy Bubbles', cursive;
  color: #2e2693;
`;

export const Button = styled.button`
  border: 0.3rem solid #2e2693;
  padding: 1.2rem 3rem;
  background-color: #fff;
  border-radius: 4rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2e2693;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2e2693;
    color: #fff;
  }
`;

export const Hero = styled.section`
  color: #141c3a;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 2.5rem;
    max-width: 60rem;
    text-align: center;
    font-weight: 300;
    margin-bottom: 5rem;
    color: #1e1f1e;
  }

  img {
    border-radius: 50%;
    width: 22rem;
    height: 22rem;
    object-fit: cover;
    object-position: top;
  }

  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    margin-bottom: 0;
  }
`;

export const Skills = styled.section`
  padding: 2rem 6rem;

  @media only screen and (max-width: 1000px) {
    padding: 2rem 2rem 0;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem 0;
    & > *:nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`;

export const SkillFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;

  img {
    width: 40rem;

    @media only screen and (max-width: 900px) {
      width: 30rem;
    }
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const SkillCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 1rem;
  padding: 8rem 4rem;
  width: 55rem;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2.3rem;
    color: #835fae;
    text-align: center;
    font-weight: 300;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const RecentWork = styled.section`
  img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    display: flex;
    margin-bottom: -0.1rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: -10rem;
  }
`;

export const RecentWorkContent = styled.div`
  padding: 2rem 15rem;
  background-color: #2e2693;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 15rem; */
  /* background: linear-gradient(to bottom, #2e2693 50%, #fff); */

  h2,
  p {
    text-align: center;
    color: #fff;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
    color: #eee;
  }

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6rem;
  gap: 3.5rem;

  @media only screen and (max-width: 450px) {
    gap: 2rem;
  }
`;

export const ProjectThumb = styled.div`
  width: 35rem;
  height: 28rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 2.8rem;
    color: #fff;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: #2e2693;
  }

  @media only screen and (max-width: 600px) {
    width: 30rem;
    height: 25rem;
  }

  @media only screen and (max-width: 450px) {
    width: 22rem;
    height: 16rem;
  }
`;

export const ProjectThumbActive = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Languages = styled.section`
  padding: 0 4rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 4rem;
  margin-bottom: 4rem;

  h2 {
    color: #141c3a;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 0rem 1rem;
  }
`;

export const LanguageSection = styled.div`
  padding: 2rem 4rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    /* color: #835fae; */
  }

  @media only screen and (max-width: 1000px) {
    padding: 2rem 0;
  }
`;
export const LanguageCardGrid = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 450px) {
    gap: 1.5rem;
  }
`;

export const LanguageCard = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #eee;
  flex-shrink: 0;

  img {
    width: 6rem;
    object-fit: contain;
    margin-right: 1rem;

    @media only screen and (max-width: 450px) {
      width: 4rem;
    }
  }

  p {
    font-size: 2rem;
  }

  @media only screen and (max-width: 450px) {
    width: 22rem;
    height: 8rem;
  }
`;

export const GetInTouch = styled.section`
  padding: 2rem 8rem;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #141c3a;
  }

  p {
    font-size: 2.5rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6rem;
  gap: 2rem;

  img {
    max-width: 40rem;

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const Form = styled.form`
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  button {
    margin-top: 3rem;
    width: max-content;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const FormFlex = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    color: #2b97bc;
  }

  input {
    border: 1px solid #2b97bc;
    height: 6rem;
    border-radius: 0.5rem;
    font-size: 2rem;
    padding: 1rem;
    color: #2e2693;
  }
`;

export const MessageInput = styled.textarea`
  border: 1px solid #2b97bc;
  height: 16rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  padding: 1rem;
  color: #2e2693;
`;

export const Footer = styled.footer`
  background-color: #2e2693;
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4.5rem;
    font-family: 'Fuzzy Bubbles', cursive;
    color: #eee;
    margin-bottom: 1.5rem;
  }
`;

export const ConnectBtnCont = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const ConnectBtn = styled.div`
  /* width: 4rem;
  height: 4rem; */
  border-radius: 50%;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 2.3rem;
    margin: 0;
  }
`;
