import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AuthContext from './store/auth-context';


function App() {

  const ctx=useContext(AuthContext)
  console.log("hii")
  return (
   
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!ctx.loggedIn &&( <Route path='/auth'>
          <AuthPage />
        </Route>)}

        
        {ctx.loggedIn &&( <Route path='/profile'>
          <UserProfile />
        </Route>)}
                        <Route path='*'>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </Layout>
 
  );
}

export default App;
