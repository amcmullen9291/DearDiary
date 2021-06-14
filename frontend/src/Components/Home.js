import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
      return (
          <>
        <div className="App">
        <section className="MainLogo"></section>
        <center><h1 className="titleBanner">ᗪEᗩᖇ ᗪIᗩᖇY..</h1></center>
        <center><button  type="button" className="myButton">Past Notes</button><Link className="myButton" to="/Entry">Something New</Link></center>
        </div>
        </>
      )
    }
  }

  export default Home;