import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes'

import './homeStyle.css'

const HomeContainer =(props)=> {
    const [selection,setSelection] = useState('');
    
    const handleInput =()=>{ document.addEventListener('keyup', (e) => {

       console.log(e.key)

       const keyPressed = e.key;
       if(keyPressed==='Backspace')
       {
           if(selection.length > 1)
           {
             setSelection(selection.substring(0,(selection.length-1)))
           }
           else
           {
               setSelection('')
           }
       }
       else
       {
            setSelection(selection + keyPressed);
            
       }
       
       
       })
    ;}
    const  handleChoice = () =>{
        let route = selection === 'login' ? ROUTES.LOGIN:ROUTES.REGISTER
        props.setStatus(selection === 'login');
        props.history.push(`${route}`)
    }
   
    return(
        <div>
            <div className='home-container' onKeyDown={handleInput()}>
                <div className='home-box'>
                    <h1 id='home-title'>TYME // LYNE</h1>
                    take control of your time.
                    <br/>
                    take control of your life.
                    {/* to do: replace <br> placeholders with actual css*/}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    "register" - get started.
                    <br/>
                    "login" - see your tl. 
                    <br/>
                    <br/>
                    {selection}<div className="cursor-div"></div>
                    {
                        selection==='register'?
                        <div>
                            <input type = "submit" value = "register" id = "reg-submit" onClick={()=>{handleChoice();}}/>
                        </div>
                        :''
                    }
                    {
                        selection==='login'?
                        <div>
                            <input type = "submit" value = "login" id = "reg-submit" onClick={()=>{ handleChoice();  }}/>
                        </div>
                        :''
                    }
                </div>
            </div>
        </div>
    )
    
}
export default HomeContainer