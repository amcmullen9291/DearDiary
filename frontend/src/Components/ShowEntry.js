import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


class ShowEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
        }
    }
    
    render() {
      return(
          <>
        <Logo/>
        <Link to={"/"}>R E T U R N H O M E</Link>
        <div>
            <center>Entry Placeholder</center>
        </div>
      </>
      )
    }
}export default ShowEntry;