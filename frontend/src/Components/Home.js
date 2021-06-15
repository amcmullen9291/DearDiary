import React from 'react';
import { Link } from 'react-router-dom';
import Index from './Index';
import Logo from './Logo';

class Home extends React.Component {
    render() {
      return (
          <>
        <div className="App">
        <Index/>
        <center><Logo/></center>
          <section className="MainLogo"></section>
          <center><h1 className="titleBanner">☆ 𝕃𝕠𝕧𝕖, 𝕞𝕖 </h1></center>
          <center><button  type="button" className="myButton">Past Notes</button><Link className="myButton" to="/NewEntry">Something New</Link></center>
          </div>
        </>
      )
    }
  }

  export default Home;