
import './App.css';
import React from 'react';
import range from './range.png';
import Intervalle from './intervalle';

class App extends React.Component{

  state = {
    shows : true,
    Person:{ fullName:'Range Rover',bio:'It s a very expensive car', imgSrc: range, profession:'run for fun'},
    currentCount: 0,
    intervalId:0
  };

  
  toggle = ()=>{(this.state.shows===true)? this.setState({shows:false}):this.setState({shows:true});}

  //-----------------------------------------------


  //-----------------------------------------------
  /*componentDidMount(){
     var intervalId = setInterval(()=> this.timer, 1000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
  }

  componentWillUnmount(){
    // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
  }

  timer(){
    var newCount = this.state.currentCount + 1;
    // setState method is used to update the state
   this.setState({ currentCount: newCount });
  }*/

  render(){

    
        if (this.state.shows=== true) {
          return(
          <>
            <h2>FullName : {this.state.Person.fullName}</h2>
            <h2>Bio : {this.state.Person.bio}</h2>
            <h2>Profession : {this.state.Person.profession}</h2><br/>
            <button onClick={this.toggle}>click Me</button>
            <Intervalle/>
            <img src={this.state.Person.imgSrc} alt='myprofile'/><br/><br/>
          </>
          )
          
        }
        else{
          return(
          <>
            <p>Person is hidden !!!!</p>
            <br/>
            <button onClick={this.toggle}>click Me</button>
          </>
          )
          
        }
  }
}

export default App;
