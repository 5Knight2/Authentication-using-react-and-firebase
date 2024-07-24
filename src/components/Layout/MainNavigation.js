import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const MainNavigation = () => {
  const ctx=useContext(AuthContext)

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
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {ctx.loggedIn==true?<li>
             <button onClick={logOutHandler}>Logout</button>
            
          </li>:''}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
