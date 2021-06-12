import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name.js';
import moment from 'moment';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDate: new Date(),
      today: moment(new Date()).format("dddd")      
  }
}

    render() {
      return (
          <>
          <body>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <div className="paper">
        <form className="paperss" id="entryForm">
            <input type="text"  className="entryHeader" name="title" placeholder="the reason for my visit:"></input><br/>
            <br/>
            <lable>♥ I just wanted to tell you ♥</lable><br/>
            <br/>
            <textarea className="papers" name="content"></textarea><br/>
            <br/>
              {this.state.today}
            <br/>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" onclick="document.getElementById('entryForm').submit()">Okay</button>
        </form>
        {/* <Name/> */}
        </div>
        <center><button class="myButton">Past Notes</button><button class="myButton"><Link to="/Home">B A C K H O M E</Link></button></center>
        </div>
        </body>
        </>
      )
    }
  }

  export default Home;