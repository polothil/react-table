import './App.css';
import DynTable from './components/DynTable';
import Buttons from './components/Buttons';
import FormComp from './components/FormComp';
import { useState } from 'react';

const App = () => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);

  const [rowSelect, setRowSelect] = useState(0);
  const [colSelect, setColSelect] = useState(0);

  // Generate Table
  const genTable = (values) => {
    setRows(parseInt(values.rows));
    setColumns(parseInt(values.columns));
  };

  return (
    <div>
      <DynTable rows={rows} columns={columns} rowSelect={rowSelect} colSelect={colSelect} />
      <Buttons />
      <FormComp onAdd={genTable} />
    </div>
  );
};

export default App;
