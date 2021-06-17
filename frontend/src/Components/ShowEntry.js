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
    console.log("params:", entryID);
    console.log(entry);
    const url = `http://[::1]:3001/entries/${entryID.id}`
    console.log("url:", url)

    const fetchEntryContent = async () => {
        const response = await axios.get(url)
        .catch((error) => {
            console.log("Error:", error)
    })
        dispatch(selectedEntry(response));
        console.log(response);
};
        useEffect(() => {
            if(entryID && entryID !== "") fetchEntryContent();
        }, [entryID])
return(
          <>
          <div className="App">
        <Logo/>
        <Link to={"/"}>R E T U R N H O M E</Link>
        <div>
            <center>Entry Placeholder</center>
        </div>
        </div>
      </>
      )
}
export default ShowEntry;