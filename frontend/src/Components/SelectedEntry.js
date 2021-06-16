import React from 'react';
import { useSelector } from 'react-redux';


 const SelectedEntry = () => {
   const notes = useSelector((state) => state.Index.entries.data);
   
   if (notes) {
  const title = notes[0].attributes.title;
  const title2 = notes[1].attributes.title;
  const title3 = notes[2].attributes.title;

   return (
     <>
     <li>{title}</li>
     <li>{title2}</li>
     <li>{title3}</li>
     </>
   )
 }
};
export default SelectedEntry;
