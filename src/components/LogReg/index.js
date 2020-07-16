import React, { Component } from 'react';
import './LogRegStyle.css';



export default class LogReg extends Component{
    state = {
        display_name:'',
        password:'',
        email:'',
        confirm:'',
        nameError:'',
        confirmError:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        }) 
    }

    handleSubmit = async (e) =>{
        e.preventDefault() 
        if(this.state.password !== this.state.confirm)
        {
            this.setState({confirmError:'Password must match confirmation'})
        }
        else
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
            });
            
            this.props.setUser({user_id:data._id,
                                display_name:data.display_name})
        }
      
    }
    render()
    { 
        console.log("aaaaaaa")
        const logged = this.props.returning; 
        console.log(logged, "<=== this is logged");
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
                            </div>}
                            email:<input type= "text" className = "input-box" name = "email" onChange = {this.handleChange}/>
                            <br/>
                            <br/>
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