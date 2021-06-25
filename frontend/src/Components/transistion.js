import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { createEntry } from '../Actions/EntryActions'

import { Link } from 'react-router-dom';
import moment from 'moment';
import swal from 'sweetalert';
import axios from 'axios';

const initialState ={
    currentDate: new Date(),
      day : moment(new Date()).format("dddd"),
      date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
      title: '',
      content: '',
}
    
const Entry = () => {
    const dispatch = useDispatch();
    const url = "http://[::1]:3001/entries/create"

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
      
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
      }      
      useEffect(() => {
        createdEntry();
    }, [])

    const createdEntry = async () => {
        const response = await axios.post(url, this.state)
        .then(response => {dispatch(createEntry(response))})
        .catch((error) => {
            console.log("Error:", error)
    })
    window.location = "/";
};


    return (
        <>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <div className="paper">
        <form className="paperss" name="entry" id="entryForm" onSubmit={this.submitHandler}>
            {/* <input type="text"  className="entryHeader" name="title" placeholder="the reason for my visit:"></input><br/> */}
            <br/>
            <p className="titleLabel">Ｉ ｊｕｓｔ ｗａｎｔｅｄ ｔｏ ｔｅｌｌ ｙｏｕ ...</p><br/>
            <br/>
            <center><label className="titleLabel">ａｂｏｕｔ </label><input type="text" className="entryTitle" name="title" value={this.title} onChange={this.changeHandler}/></center>
            <textarea type="text" className="papers" name="content" value={this.content} onChange={this.changeHandler}/><br/>
            <br/>
            <input className="entryDate" type="text" name="date" readOnly="read-only" defaultValue={this.state.day + " " + this.state.date} onChange={this.changeHandler}/>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" type="submit">Okay</button>
        </form>
        {/* <Name/> */}
        </div>
        <center><form>
          <button className="myButton" onClick={NoSave}>Past Notes</button></form><Link className="myButton" to="#">B A C K H O M E</Link></center>        </div>
        </>
    )
};
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


const mapStateToProps = (state={initialState}) => ({
    newEntry: state.newEntry
  });
  
  const mapDispatchToProps = { Entry };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Entry);