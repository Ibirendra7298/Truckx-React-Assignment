import React from 'react';
import './App.css';
import Card from './common/card';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  

export default class User extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      user:props.location.state.user,
    };
    this.shortlist=localStorage.getItem('shortlist');      
    this.rejectlist=localStorage.getItem('rejectlist');      
}

shortlisted(){
    console.log(this.shortlist)
      if(this.shortlist){
    if(this.shortlist.indexOf(this.state.user)==-1){
        this.shortlist.push(this.state.user);
        localStorage.removeItem('shortlist');
        localStorage.setItem('shortlist',this.shortlist);
    }}
    else{
        this.shortlist=[];
        this.shortlist.push(this.state.user);
        localStorage.setItem('shortlist',this.shortlist);
    }
      if(this.rejectlist)
    if(this.rejectlist  .indexOf(this.state.user)==!-1 ){
        this.rejectlist.splice(this.rejectlist.indexOf(this.state.user),1);
        localStorage.removeItem('rejectlist');
        localStorage.setItem('rejectlist',this.rejectlist);
    }
}

rejected(){
    if(this.rejectlist){
    if(this.rejectlist.indexOf(this.state.user)==-1){
        this.rejectlist.push(this.state.user);
        localStorage.removeItem('rejectlist');
        localStorage.setItem('rejectlist',this.rejectlist);
    }}else{
        this.rejectlist=[];
        this.rejectlist.push(this.state.user);
        localStorage.setItem('rejectlist',this.rejectlist);
    }
    if(this.shortlist)
    if(this.shortlist.indexOf(this.state.user)==!-1){
        this.shortlist.splice(this.rejectlist.indexOf(this.state.user),1);
        localStorage.removeItem('shortlist');
        localStorage.setItem('shortlist',this.shortlist);
    }
  }

    render(){
    return (
      <div className="container-fluid">
        {/* <Header search={this.search} ></Header> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shortlisted</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rejected</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" ariaLabel="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <br></br><br></br>
        <div className="row" style={{width:'100%'}}>
        <div className="card" style={{width:"18rem", margin:'auto'}}>
            <img src={this.state.user.Image} className="card-img-top" alt="UserImage"></img>
            <div className="card-body">
                <p className="card-text">{this.state.user.name}</p>
            </div>
            <div className="row " style={{position:'absolute',bottom:'0px', width:'100%'}}>
                            <div className="col-6" style={{padding:'5px', margin:'auto'}}>
                                <button className="btn btn-primary" onClick={()=>this.shortlisted()}><Link to='/'>Shortlisted</Link></button>
                            </div>
                            <div className="col-6" style={{padding:'5px', margin:'auto'}}>
                                <button className="btn btn-danger" onClick={()=>this.rejected()}><Link to='/'> Rejected</Link></button>
                            </div>
                        </div>
        </div>
        </div>
      </div>
    );
  }
}
