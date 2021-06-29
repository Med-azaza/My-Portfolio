import './App.css';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About}/>
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact}/>
            <Route component={Error}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
