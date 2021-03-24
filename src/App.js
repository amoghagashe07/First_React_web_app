import LoginRegister from './LoginRegister'
import PlusMinus from './PlusMinus'
import TaskTracker from './TaskTracker'
import NavBar from './NavBar'
import {Route, Link} from 'react-router-dom'


function App() {
  

  return (
    <div>
      <NavBar/>
      <Route exavt path='/task' component={TaskTracker} /> 
      <Route exact path='/login' component={LoginRegister} />
      <Route exact path='/addsub' component={PlusMinus} />
    </div>
  );
}


export default App;
