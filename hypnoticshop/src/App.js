import React, { Component } from 'react';

//COMPONENTS
import Navigation from './components/navigation/navigation';

//CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';


const initialState = {
  route: 'home',
  isOpen: false
}

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const {route} = this.state;

    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
