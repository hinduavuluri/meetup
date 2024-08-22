import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  RegisterDiv,
  RegisterImg,
  FormDiv,
  FormHeading,
  LabelText,
  InputDiv,
  SelectDiv,
  OptionEl,
  Button,
  Errp,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        changeRegistrationStatus,
        updateName,
        updateTopic,
        name,
        topic,
        updateErr,
        registerErr,
      } = value

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateErr(true)
        }
      }

      const onChangeUsername = event => {
        updateName(event.target.value)
      }

      const onChangeOptionId = event => {
        updateTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterDiv>
            <RegisterImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormDiv onClick={submitForm}>
              <FormHeading>Let us join</FormHeading>
              <LabelText htmlFor="username">NAME</LabelText>
              <InputDiv
                type="text"
                id="username"
                onChange={onChangeUsername}
                placeholder="Your name"
                value={name}
              />
              <LabelText htmlFor="topics">TOPICS</LabelText>
              <SelectDiv id="topics" onChange={onChangeOptionId} value={topic}>
                {topicsList.map(each => (
                  <OptionEl key={each.id} value={each.id}>
                    {each.displayText}
                  </OptionEl>
                ))}
              </SelectDiv>
              <Button type="submit">Register Now</Button>
              {registerErr ? <Errp>Please enter your name</Errp> : null}
            </FormDiv>
          </RegisterDiv>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
