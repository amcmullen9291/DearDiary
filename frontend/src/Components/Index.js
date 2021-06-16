import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import SelectedEntry from './SelectedEntry';
import { setEntries } from '../Actions/EntryActions';


const Index = () => {
  const entries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchIndex = async() => {
    const response = await axios.get("http://[::1]:3001")
    .catch((error) => {
      console.log("Error:", error);
    });
    dispatch(setEntries(response.data));
    console.log("Entries:", response.data.data);
  };

  useEffect(() => {
    fetchIndex();
  }, [])
  console.log("Entries:", entries);
  
  return (
    <div className="sidenav">
        <a href="#">Current Entries</a>
        <SelectedEntry/>
    </div>
    )
}


  export default Index 
