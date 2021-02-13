import React from 'react';
import './App.css';
import Card from './common/card';

export default class EditUser extends React.Component {
  constructor(props){
    super(props);
    this.get();
    this.state={
      originalList:[],
      displayList:[],
      token:'',
    };
    this.get=this.get.bind(this);
  }

  async get(){
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json',{
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
        <div className="row">
          {
            this.state.displayList.map((itex)=>{
              return(
                <Card item={itex}></Card>
                );
              })
            }
        </div>
      </div>
    );
  }
}
