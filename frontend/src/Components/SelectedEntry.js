import React from 'react';
import { useSelector } from 'react-redux'

const SelectedEntry = () => {
  const entries = useSelector((state) => state.Index.entries);
  const renderIndex = entries.map((entry) => {
    const { id, title } = entry;
    return(
        <div key={id}>
            {title}
        </div>
        );
  })

    return (
      <>
        {renderIndex}
      </>
    );
  }

  export default SelectedEntry;