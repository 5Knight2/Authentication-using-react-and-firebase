import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import React,{ useContext } from 'react';

const MainNavigation = () => {
  const ctx=useContext(AuthContext)

console.log("loggedIn?"+ctx.loggedIn)

const logOutHandler=()=>{
  ctx.logOut();
}

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
         
          {ctx.loggedIn? (<React.Fragment><li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
             <button onClick={logOutHandler}>Logout</button>
            
          </li></React.Fragment>): <li>
            <Link to='/auth'>Login</Link>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
