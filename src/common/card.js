import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Card extends React.Component {
    constructor(props){
        super(props);
        // console.log(props.item);
        this.state={
            item:props.item
        };
        // this.item=props.item;
    }
//ame releasedate, coverphoto
    render(){
        return(
            <div className="card text-center col-sm-4 col-lg-2 col-md-3" style={{padding:'08px',marginBottom:'8px'}} >
                <Link to={{
  pathname: "/user/:"+ this.state.item.id,
  state: {
    user: this.state.item
  }
}}>
                    <div style={{color:'#39ff14', marginBottom:'25px'}} className="card-body">
                        <img src={this.state.item.Image} className="card-img-top" style={{maxWidth:'100%'}} alt=""></img>
                        <h5 className="card-title" style={{margin:'auto'}}>{ this.state.item.name }</h5>
                        
                    </div>
                </Link>
            </div>
        )
    }
}