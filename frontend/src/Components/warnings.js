import swal from 'sweetalert';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
  
class NoSave extends Component {
  constructor(props) {
    super(props);
 
  }
 
  render() {
    return (

     const NoSave = swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  )
  }

 
export default NoSave;