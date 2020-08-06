import React, {Component}from 'react';

class Dashboard extends Component 
{
    state = {
        tymelynes : {},


    }

   async componentDidMount ()
    {
       
        const data = {
            user_id: this.props.currentUser.user_id
        }
        console.log(data.user_id, "user id")
       const tl = await fetch('http://localhost:8000/tl/dashboard', {
           method:'POST',
           body:JSON.stringify(data),
           mode:'cors',
           headers:{'Content-Type': 'application/json'}
       })
       const parsedTL = await tl.json()
       
       this.setState({tymelynes:parsedTL})
       
    }

    render()
    {

        return(
            <div>
                This is the Dashboard
            </div>
        )

    }
    
}
export default Dashboard