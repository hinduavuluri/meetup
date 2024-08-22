import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    registerErr: false,
    name: '',
    topic: 'Arts and Culture',
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  updateErr = response => {
    this.setState({registerErr: response})
  }

  render() {
    const {isRegister, registerErr, name, topic} = this.state
    return (
      <Switch>
        <RegisterContext.Provider
          value={{
            isRegister,
            changeRegistrationStatus: this.changeRegistrationStatus,
            name,
            topic,
            updateName: this.updateName,
            updateTopic: this.updateTopic,
            updateErr: this.updateErr,
            registerErr,
          }}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </RegisterContext.Provider>
      </Switch>
    )
  }
}

export default App
