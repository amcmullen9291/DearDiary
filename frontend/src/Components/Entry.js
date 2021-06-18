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
      onClick: null,
      title: '',
      content: '',
    
      
  }
} 
handleInputChanged(event) {
  this.setState({
   title: event.target.value,
   content: event.target.value,
   date: event.target.value
  });
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
            <center><input type="text" className="entryTitle" name="title" defaultValue="My Title" ref={title => this.title = title}></input></center>
            <textarea className="papers" name="content" ref={content => this.content = content}></textarea><br/>
            <br/>
            <div className="myentry">
            <input className="entryDate" type="text" name="date" readOnly="read-only" defaultValue={this.state.day + " " + this.state.date} ref={date => this.date = date}></input>
            </div>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" type="submit" onClick={postEntry.bind(this)}>Okay</button>
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

    // function returnHome(){
    //     window.location = "/";
    // }
     // ------------------fetch Post request---------------
     function postEntry(){
      const title = this.state.title;
      const content = this.state.content;
      const date = this.state.date;

     const entry = {
       title: title,
       content: content,
       date: date
     }
   fetch(' http://[::1]:3001/entries/create', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(entry),
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