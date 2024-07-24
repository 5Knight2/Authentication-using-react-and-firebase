import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formValues,setFormValues]=useState({email:'',password:''});
  const [isLoading,setIsLoading]=useState(false);
  const url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe6j4L1-OOI18rrXJ2c1gThmffmH8qnng'
  const changeHandler=(e)=>{
    setFormValues((curr)=>{ return {...curr,[e.target.name]:e.target.value}})
} 
 

  const submitForm=(event)=>{
    event.preventDefault()
    console.log(formValues)
    setIsLoading(true);
addUserHandler({...formValues,returnSecureToken:true});
setIsLoading(false);

  }


  const addUserHandler=async(user)=>{
    try{
        const response=await fetch(url,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }

        })

        if(!response.ok)throw new Error('something went wrong')
        else{
            setFormValues({email:'',password:''})

            
            const data=await response.json();
            
            console.log(data)
        }
        

       
    }catch(err){
        console.log(err.message)
        alert(err.message)
        setIsLoading(false);
    }

}



  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' required onChange={changeHandler} value={formValues.email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            name='password'
            onChange={changeHandler} value={formValues.password}
          />
        </div>
        <div>
          <button onClick={submitForm}>{isLogin ? 'Login' : 'Create Account'}</button>
          <p className={classes.white}>{isLoading?'Loading...':''}</p>
         <a className={classes.white} onClick={switchAuthModeHandler}> {isLogin 
? 'Create new account' : 'Login with existing account'}
          </a>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
