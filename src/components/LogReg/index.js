import React, {useState} from 'react';
import { render } from '@testing-library/react';
import './LogRegStyle.css';

const LogReg = ()=>
{
    //hooks

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [nameError, setNameError] = useState('')
    const [confirmError, setConfirmError] = useState('')
  
    // event handlers for state and Submit

  const handleUserNameChange=(e)=>{
      setUserName(e.currentTarget.value)
  }
  const handlePwChange = (e)=>{
      setPassword(e.currentTarget.value)
  }
  const handleConfirmChange = (e)=>{
      setConfirm(e.currentTarget.value)
  }
  const handleSubmit = (e) =>{
      e.preventDefault() 
      if(password!==confirm)
      {
          setConfirmError('Password must match confirmation')
      }

    //   To Do: check if username is taken
    //   if()
    //   {
    //       setNameError('Username taken. choose another')
    //   }

  }
  
return(
    <div className= "home-container">
        <div className = "home-box">
            <h1>Registration</h1>
            <div className = "form-container">
                <form id= "login-form" onSubmit={handleSubmit}>
                    Username:<input type= "text" className = "input-box" name = "userName" onChange = {handleUserNameChange}/>
                    <br/>
                    <br/>
                    Password:<input type= "text" className = "input-box" name ="password" onChange = {handlePwChange}/>
                    <br/>
                    <br/>
                    Confirm Password:<input type= "text" className = "input-box" name ="confirm" onChange ={handleConfirmChange}/>
                    <br/>
                    <input type = "submit" id = "reg-submit"/>
                </form>
                <div className="error">{confirmError? confirmError:''}</div>
            </div>
            
        </div>
    </div>
)

}

export default LogReg