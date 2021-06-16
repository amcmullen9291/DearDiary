import React from 'react';
import { useSelector } from 'react-redux';


 const SelectedEntry = () => {
  const notes = useSelector((state) => state.Index.entries.data);

   if (notes) {
      var renderIndex = notes.map(entry => {
        const {id, title } = entry.attributes;
        console.log(entry);
        return (<ul key={id}>
          <li><a href={entry.id}>{title}</a></li>
          </ul>)
      })
    }
    return(
      <>
      <div>{renderIndex}</div>
      </>
    )
  }

  // const title = notes[0].attributes.title;
  // const title2 = notes[1].attributes.title;
  // const title3 = notes[2].attributes.title;
export default SelectedEntry;
