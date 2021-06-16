import { useSelector } from 'react-redux'

const SelectedEntry = () => {
  const entries = useSelector((state) => state.Index.entries);
  const { id, title, date } = entries;
  const renderIndex = entries.map((entry) => {
    return (<ul key={id}>
      <li>{title}</li>
    <li>{date}</li>
    </ul>
    );
  })
    return (
      <>
      {SelectedEntry}
      </>
    );
  }

  export default SelectedEntry;