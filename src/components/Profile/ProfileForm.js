import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const ctx=useContext(AuthContext)
  const url='https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDe6j4L1-OOI18rrXJ2c1gThmffmH8qnng'
  const passwordRef=useRef();

  const passwordChangeHandler=(e)=>{
  e.preventDefault();

const user={idToken:ctx.token,
  password:passwordRef.current.value,
  returnSecureToken:true}
  submitHandler(user)
  }


  const submitHandler=async(user)=>{
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
            const data=await response.json();
            
            console.log(data)
            ctx.getToken(data.idToken)
        }
        

       
    }catch(err){
        console.log(err.message)
        alert(err.message)
    }

}

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button onClick={passwordChangeHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
