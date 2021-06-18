import React from 'react';
import { Link } from 'react-router-dom';
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
            <center><input type="text" className="entryTitle" name="title" defaultValue="My Title"></input></center>
            <textarea className="papers" name="content"></textarea><br/>
            <br/>
            <div className="myentry">
            <input className="entryDate" type="text" name="date" readOnly="read-only" defaultValue={this.state.day + " " + this.state.date}></input>
            </div>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" onClick={postEntry()}>Okay</button>
        </form>
        {/* <Name/> */}
        </div>
        <center><form>
          <button className="myButton" onClick={NoSave}>Past Notes</button></form><Link className="myButton" to="#">B A C K H O M E</Link></center>        </div>
        </>
      )
    }
  }

     function NoSave(e){ 
       e.preventDefault();
       swal({
      title: "Hey, wait:",
      text: "You have not saved your entry. Deleting this can't be undone!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Sticks and Stones...", {
          icon: "info",
        }).then(function() {
          window.location = "/";
      });
      } else {
        swal("Oh, okay.");
      }
    });
     }
// ------------------fetch Post request---------------
     function postEntry(){
      const data = {
        title: "Post #571",
        content: "just seeing if fetch works",
        date: "Friday June 19th, 9:48pm"
      }
    fetch(' http://[::1]:3001/entries/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },[])
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }
     


  export default Entry;