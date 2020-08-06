import React, { Component } from 'react';
import * as ROUTES from '../../Constants/routes'
import './LogRegStyle.css';



export default class LogReg extends Component{
    state = {
        display_name:'',
        password:'',
        email:'',
        confirm:'',
        emailError:'',
        confirmError:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        }) 
    }

    handleSubmit = async (e) =>{
        e.preventDefault() 
        if(this.state.password !== this.state.confirm&& this.props.returning !== true)
        {
            this.setState({confirmError:'Password must match confirmation'})
        }
        else
        {
            // this section handles the registering a user for when the component is configured for registration
            if( !this.props.returning )
            {
                
                const data = 
                {
                    display_name: this.state.display_name,
                    email: this.state.email,
                    password: this.state.password
                }
                const user = await fetch('http://localhost:8000/auth/users/new', 
                {
                    method:'POST',
                    body: JSON.stringify(data),
                    mode: 'cors',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                }) ;
                
                const parsedUser = await user.json();
                
                if(parsedUser.code === 400)
                {
                    this.setState({emailError:user.message})
                }
                else
                {
                    const userState = 
                    { 
                      display_name: parsedUser.display_name,
                      user_id: parsedUser.user_id
                    }

                    this.props.setUser(userState)
                    this.props.history.push(`${ROUTES.DASHBOARD}`)
                }
                                
            }
            else
            {
                const data = 
                {
                    email: this.state.email,
                    password: this.state.password
                } 
                const foundUser = await fetch(`http://localhost:8000/auth/users/login`,
                {
                    method:'POST',
                    body:JSON.stringify(data),
                    mode:'cors',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                const parsedUser = await foundUser.json()

                if(parsedUser.code === 400)
                {
                    this.setState({emailError:parsedUser.message})
                }
                else
                {
                    const userState = 
                    { 
                      display_name: parsedUser.display_name,
                      user_id: parsedUser.user_id
                    }
                    this.props.setUser(userState)
                    // this.props.history.push(`${ROUTES.DASHBOARD}/${userState.user_id}`)
                    this.props.history.push(`${ROUTES.DASHBOARD}`)
                }
            }
            
        }
      
    }
    render()
    { 
        return(
            
            <div className= "home-container">
                <div className = "home-box">
                    { this.props.returning && <h1>User Login</h1>}
                    { !this.props.returning && <h1>Registration</h1>}
                    <div className = "form-container">
                        <form id= "login-form" onSubmit={this.handleSubmit}>
                        { this.props.returning? null 
                        : <div> Display Name:<input type= "text" className = "input-box" name = "display_name" onChange = {this.handleChange}/>
                            <br/>
                            <br/>
                          </div>
                        }
                            email:<input type= "text" className = "input-box" name = "email" onChange = {this.handleChange}/>
                            <br/>
                            <br/>
                            { !this.state.emailError && <div className="error">{this.state.emailError}</div> }
                            Password:<input type= "text" className = "input-box" name ="password" onChange = {this.handleChange}/>
                            <br/>
                            <br/>
                            {this.props.returning? null :
                            <div> Confirm Password:<input type= "text" className = "input-box" name ="confirm" onChange ={this.handleChange}/>
                            <br/>
                            </div>
                            }
                            <input type = "submit" id = "reg-submit"/>
                        </form>
                        <div className="error">{this.state.confirmError? this.state.confirmError:''}</div>
                    </div>
                    
                </div>
            </div>   
        )
    }
        
    
    
}