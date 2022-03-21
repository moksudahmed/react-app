import React from "react";
import Button from "./button";


class Clock extends React.Component{
    //state = {date: new Date(), local: 'bn-BD'};
    constructor(props){
        super(props);
       // this.state = { date: new Date()};
        this.state = {date: new Date(), local: 'bn-BD'};
       // this.handelClick = this.handelClick.bind(this);
    }
   
    componentDidMount(){
       this.clockTimer = setInterval(()=>{this.tick()},1000);
   }
   componentWillUnmount(){
       clearInterval(this.clockTimer);
   }

   tick(){
    this.setState(
        {date: new Date()});
   }
   
   handelClick = (local) =>{
       this.setState({
           local: local,
       })
       console.log("Button has clicked");
   }
   
   render(){
       const {date, local} = this.state;  
        return (
            <div>
            <h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(local)}
                </span>
            </h1>             
            {local ==='bn-BD'?(<Button change={this.handelClick} local="en-US" show={false} enable/>)
                             :(<Button change={this.handelClick} local="bn-BD" show enable ={false}/>)
            }        
            </div>
        );
    }
}

export default Clock;
