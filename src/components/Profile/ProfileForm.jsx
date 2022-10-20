import classes from './ProfileForm.module.css';
import { useRef } from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import {Navigate, useNavigate} from 'react-router-dom';

const ProfileForm = () => {
  
const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const newPasswordInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYOav_z4_71XVwnS_ecrHNwuWYJ3IrChE',
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type' :'application/json',
      },
    }).then (response => {
      // assumption: Always succeeds.!
      navigate('/')
    });
  
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
