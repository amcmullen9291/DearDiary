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
    // const { title, date, content } = entry;
    console.log("Entry:", entry);
    console.log("ID:", entryID.id);
    const url = `http://[::1]:3001/entries/${entryID.id}`
    console.log("url:", url);

    const fetchEntryContent = async () => {
        const response = await axios.get(url)
        .catch((error) => {
            console.log("Error:", error)
    })
        dispatch(selectedEntry(response));
};
        useEffect(() => {
            if(entryID && entryID !== "") fetchEntryContent();
        }, [])

        if (Object.keys(entry).length > 0) {
            const { id, title, content, date } = entry.data.data.attributes;
            var entryDetails = (
              <>
                <center key={id}>
                  <div>{title}</div>
                  <p>{content}</p>
                  <div>{date}</div>
                </center>
              </>
            );
        }
return(
          <>
          <div className="App">
        <Logo/>
        <div id="sidenav2">
        <center><Link to={"/"}>R E T U R N H O M E</Link></center>
        </div>
            <p className="details">{entryDetails}</p>
            <a href="/"><button className="entrySubmit">Okay</button></a>
        
        </div>
        <div className="bottomMarker">✳ ✳ ✳ ✳  ✳ ✳ ✳ ✳ ✳ ✳ ✳ ✳ ✳ 🄳🄴🄰🅁 🄳🄸🄰🅁🅈</div>
      </>
      )
}

  
export default ShowEntry;

