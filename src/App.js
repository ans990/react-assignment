import React from 'react';
import Users from './containers/Users'
import UserDetails from './containers/UserDetails'
import {getUsers} from './Services/GetUsersData'
class App extends React.Component {
  constructor() {
    super();   
   this.state = {
     usersList: {},
   }
  }
  componentDidMount(){
    getUsers().then((res)=>{
      this.setState({usersList:res.data});   

    });
    
  }
 
  render() {
    return (
      <div className="app">
      <Users usersList = {this.state.usersList}/>
      </div>
    )
  }
}




export default App;
