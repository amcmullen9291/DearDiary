import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
      return (
          <>
        <div className="App">
        <center><h1 className="titleBanner">ᗪEᗩᖇ ᗪIᗩᖇY..</h1></center>
        <center><button class="myButton">Past Notes</button><Link class="myButton" to="/Entry">Something New</Link></center>
        </div>
        </>
      )
    }
  }

  export default Home;