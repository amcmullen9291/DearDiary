import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name.js';
class Home extends React.Component {
    render() {
      return (
          <>
          <body>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <div className="paper">
        <form className="paperss">
            <lable>♥ I just wanted to tell you ♥</lable><br/>
            <br/>
            <textarea className="papers" name="content"></textarea><br/>
            <br/>
            <input type="submit" name="submit" value="Okay"></input>
        </form>
        <Name/>
        </div>
        <center><button class="myButton">Past Notes</button><button class="myButton"><Link to="/Home">B A C K H O M E</Link></button></center>
        </div>
        </body>
        </>
      )
    }
  }

  export default Home;