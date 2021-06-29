import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
// import '../public/css/style.css'
 
import BoardList from './components/BoardList';
import BoardNew from './components/BoardNew';
import BoardContent from './components/BoardContent';
import Footer from './components/Footer';
 
function App () {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/' component={BoardList} exact />
            <Route path='/BoardNew' component={BoardNew} exact />
            <Route path='/BoardContent' component={BoardContent} exact />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
 
export default App;