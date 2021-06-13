import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name.js';
import moment from 'moment';
import swal from 'sweetalert';


class Entry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDate: new Date(),
      day : moment(new Date()).format("dddd"),
      date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  }
}

    render() {
      return (
          <>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <div className="paper">
        <form className="paperss" id="entryForm">
            {/* <input type="text"  className="entryHeader" name="title" placeholder="the reason for my visit:"></input><br/> */}
            <br/>
            <p>♥ I just wanted to tell you ♥</p><br/>
            <br/>
            <textarea className="papers" name="content"></textarea><br/>
            <br/>
            <input className="entryDate" type="text" name="date" readOnly="read-only" defaultValue={this.state.day + " " + this.state.date}></input>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" >Okay</button>
        </form>
        {/* <Name/> */}
        </div>
        <center><form onClick={NoSave}>
          <button className="myButton" onClick={NoSave}>Past Notes</button></form><Link className="myButton" to="/Home">B A C K H O M E</Link></center>        </div>
        </>
      )
    }
  }

   const NoSave = () => {
    return (
      swal("Hey wait:", "Your entry was not saved!").pause
    )
  } 


  export default Entry;