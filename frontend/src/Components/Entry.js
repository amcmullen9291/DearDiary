import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    render() {
      return (
          <>
          <body>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <center><form >
            <input className="paper" name="content"></input>
        </form></center>
        
        <center><button class="myButton">Past Notes</button><button class="myButton">Something New</button></center>
        </div>
        </body>
        </>
      )
    }
  }

  export default Home;