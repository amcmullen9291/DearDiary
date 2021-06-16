import React from 'react';
import { useSelector } from 'react-redux';


 const SelectedEntry = () => {
  const notes = useSelector((state) => state.Index.entries.data);

   if (notes) {
      const renderIndex = notes.map(entry => {
        return <ul key={entry.id}>{entry.title}</ul>
      })
    }
    return(
      <>
      {SelectedEntry}
      </>
    )
  }

  // const title = notes[0].attributes.title;
  // const title2 = notes[1].attributes.title;
  // const title3 = notes[2].attributes.title;
export default SelectedEntry;
