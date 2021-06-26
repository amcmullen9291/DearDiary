import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import SelectedEntry from './SelectedEntry';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setEntries } from '../Actions/EntryActions';

const Index = () => {
  const entries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchIndex = async () => {
    const response = await axios.get(' http://[::1]:3001').catch((error) => {
      console.log("Error:", error);
    });
    dispatch(setEntries(response.data));
  };

  

  useEffect(() => {
    fetchIndex();
  }, [])

  console.log(" Index Entries:", entries.Index.entries.data)
  return (
    <div id="sidenav">
        <a href="#">Current Entries</a>
        <SelectedEntry/>
    </div>
    )
}
const mapStateToProps = (state) => {
  return {
    entry: state.entry
  }

}

     const mapDispatchToProps = (dispatch) => {
       return{
         findEntry: (entry) => { dispatch({type: 'SELECTED_ENTRY', entry})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(Index); 
