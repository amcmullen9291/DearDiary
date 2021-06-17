import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedEntry } from '../Actions/EntryActions';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import axios from 'axios';


const ShowEntry = () => {
    const entry = useSelector((state) => state.entry);
    const entryID = useParams();
    const dispatch = useDispatch();
    console.log(entryID);

    const fetchEntryContent = async () => {
        const response = await axios
        .get(`http://[::1]:3001/entries/${entryID}`)
        .catch((error) => {
            console.log("Error:", error)
    });
        dispatch(selectedEntry(response.data));
};
return(
          <>
        <Logo/>
        <Link to={"/"}>R E T U R N H O M E</Link>
        <div>
            <center>Entry Placeholder</center>
        </div>
      </>
      )
}
export default ShowEntry;