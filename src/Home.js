import React from 'react';
import './App.css';
import Card from './common/card';
import Header from './common/header';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.get();
    this.state={
      originalList:[],
      displayList:[],
      token:'',
    };
    this.search=this.search.bind(this);
    this.get=this.get.bind(this);
    this.delete=this.delete.bind(this);
  }

  async get(){
    fetch('https://reqres.in/api/users',{
       method:'GET',
     }).then(res=>{
      //  console.log(res);
       return res.json();
      }).then(dat=>{
      //  console.log(dat);
       this.setState({
         displayList:dat,
         originalList:dat
      });
     }).catch((err)=>{
       throw err;
     });
  }

  search(key){
    console.log("called");
    var list=[];
    this.state.originalList.map((item)=>{
      if(item.name.toLowerCase().match(key.toLowerCase()) != null || item.username.toLowerCase().match(key.toLowerCase()) != null || item.email.toLowerCase().match(key.toLowerCase()) != null || item.phone.toLowerCase().match(key.toLowerCase()) != null){
        list.push(item);
      }
    })
    this.setState({displayList:list});
    console.log(this.state.displayList);
  }

  delete(index){
    fetch('https://reqres.in/api/users/'+index,{
       method:'DELTE',
     }).then(res=>{
       console.log(res);
       this.get();
     }).catch((err)=>{
       throw err;
     });
  }

    render(){
    return (
      <div className="container-fluid">
        My Customer
        <br></br>
        <Header search={this.search}  ></Header>
       
        <div className="container">
      <div className="row">
        <div className="col-4 offset-8"><Link to="addUser"><button>Add User</button></Link></div>
      </div>
      <div className="row">
        <div className="col-2">Image</div>
        <div className="col-2">Username</div>
        <div className="col-2">Email</div>
        <div className="col-2">Phone</div>
        <div className="col-2">Created</div>
        <div className="col-2">Action</div>
      </div>
          {
            this.state.displayList.map((itex,index)=>{
              return(
                <div id="index" className="row">
                  <div className="col-2">
                    <img src={itex.avatar} style={{maxHeight:'30px'}}></img>
                  </div>
                  <div className="col-2">{itex.first_name} {itex.last_name}</div>
                  <div className="col-2">{itex.email}</div>
                  <div className="col-2">{itex.phone?itex.phone:'1234567890'}</div>
                  <div className="col-2">{itex.createdDate?itex.createdDate:'09-22-2021'}</div>
                  <div className="col-2">
                    <div className="row"><Link to="editUser"><button >Edit</button></Link></div>
                    <div className="row"><button onClick={()=>this.delete({index})}>Delete</button></div>
                  </div>
                </div>
                );
              })
            }
        </div>
      </div>
    );
  }
}
