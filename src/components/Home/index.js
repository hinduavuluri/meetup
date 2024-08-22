import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import {
  RegistrationDiv,
  HomeHead,
  HomeText,
  RegisterBtn,
  HomeImg,
  AfterResgHead,
  AfterRsgText,
} from './styledComponents'

const Home = props => {
  const onClickRegisterBtn = () => {
    const {history} = props
    history.replace('/register')
  }
  const beforeRegistration = () => (
    <>
      <HomeHead>Welcome to Meetup</HomeHead>
      <HomeText>Please register for the topic</HomeText>
      <Link to="/register">
        <RegisterBtn onClick={onClickRegisterBtn}>Register</RegisterBtn>
      </Link>
      <HomeImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const afterRegistrationView = (name, topic) => (
    <>
      <AfterResgHead>{`Hello ${name}`}</AfterResgHead>
      <AfterRsgText>{`Welcome to ${topic}`}</AfterRsgText>
      <HomeImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Header />
            <RegistrationDiv>
              {isRegister
                ? afterRegistrationView(name, topic)
                : beforeRegistration()}
            </RegistrationDiv>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
