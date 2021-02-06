import './style.css';
import Login from './Login'
import Register from './Register';
import Dashboard from './profile-comp/Dashboard';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className='background'>
      <Router>
      <Redirect to="/login"></Redirect>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register}/>
        <Route exact path='/home' component={Dashboard}/>
      </Router>
</div>
    </div>
  );
}

export default App;
