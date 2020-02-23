import React, {useState} from 'react';
import './homeStyle.css'

const HomeContainer =()=> {
    const [selection,setSelection] = useState('');
    const handleInput =()=>{ document.addEventListener('keyup', (e) => {
       console.log(e.key)
       const keyPressed = e.key;
       if(keyPressed==='Backspace')
       {
           setSelection(selection.slice(0,(selection.length-1)))
       }
       else
       {
            setSelection(selection + keyPressed)
           console.log(selection,"<==== selection ")
            if(selection === 'register')
            {
                console.log('register')
            }
            else if(selection === 'login')
            console.log('login')
       }
       
      });}
    return(
        <div>
            <div className='home-container' onKeyDown={handleInput()}>
                <div className='home-box'>
                    <h1 id='home-title'>TYME // LYNE</h1>
                    take control of your time. <br/>
                    take control of your life.<br/><br/>
                    // <br/><br/>
                    "register" - get started.<br/>
                    "login" - see your tl. <br/><br/>
                    {selection}<div className="cursor-div"></div>
                    {
                        selection==='register'?
                        <div>
                            <button>Register</button>
                        </div>
                        :''
                    }
                    {
                        selection==='login'?
                        <div>
                            <button>Login</button>
                        </div>
                        :''
                    }
                </div>
            </div>
           
        </div>
    )
    
}
export default HomeContainer