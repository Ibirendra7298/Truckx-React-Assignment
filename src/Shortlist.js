import React from 'react';
import './App.css';
import Card from './common/card';

export default class AddUser extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      email:'',
      phone:''
    };
    this.add=this.add.bind(this);
  }

  add(){
    
    fetch("https://reqres.in/api/users",{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username:this.state.username,
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
      }) // body data type must match "Content-Type" header
    })
    .then(data=>{console.log("success")})
    .catch(err=>console.log(err));
  }

  msg(event,key){
    if(key==="name")
		this.setState({name:event.target.value});
    if(key==="username")
		this.setState({username:event.target.value});
    if(key==="email")
		this.setState({email:event.target.value});
    if(key==="phone")
		this.setState({phone:event.target.value});
		console.log(event);
		event.preventDefault();
		console.log(this.state);
		this.submit();
	}
    render(){
    return (
      <div className="container-fluid">
        <h2>Add User</h2>
        <br>
        </br>
        <label>Name:</label><br></br>
        <input className="form-control" placeholder="enter name"
					 value={this.state.name}
					 onChange={(e)=>this.msg(e,"name")} ></input>
        <br>
        </br>
        <label>username:</label><br></br>
        <input className="form-control" placeholder="enter username"
					 value={this.state.username}
					 onChange={(e)=>this.msg(e,"username")} ></input>
        <br>
        </br>
        <label>email:</label><br></br>
        <input className="form-control" placeholder="enter email"
					 value={this.state.email}
					 onChange={(e)=>this.msg(e,"email")} ></input>
        <br>
        </br>
        <label>phone:</label><br></br>
        <input className="form-control" placeholder="phone"
					 value={this.state.phone}
					 onChange={(e)=>this.msg(e,"phone")} ></input>
           <br></br>
           <button onClick={()=>{this.add()}} >Submit</button>
      </div>
    );
  }
}
