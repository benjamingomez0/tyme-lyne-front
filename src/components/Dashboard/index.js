import React, {Component}from 'react';

class Dashboard extends Component 
{
    state = {
        tymelynes : {},


    }

   async componentDidMount ()
    {
        //to do: make this work
        const data = {
            id: this.props.currentUser.user_id
        }
       const tl = await fetch('http://localhost:8000/tl/')
       const parsedTL = await tl.json()
       console.log('hitting')
       
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