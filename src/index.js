import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './styles.css';
import Home from './home.jsx';
import Women from './women.jsx';
import Men from './men.jsx';
import Error from './error.jsx';
import Navbar from './components/navbar.jsx';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Women" component={Women}/>
              <Route path="/Men" component={Men}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
