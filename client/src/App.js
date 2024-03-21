import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Detail from './views/detail/detail';
import Form from './views/form/form';
import Home from './views/home/home'

function App() {
  return (
    <BrowserRouter>
     <div>
      <Switch>
         <Route exact path='/home' component={ Home } />
      
         <Route path='/home/:id' component={ Detail } />
      
         <Route path='/create' component={ Form } /> 
      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
