import PropTypes from 'prop-types';
import { useState } from 'react';

const FormComp = ({ onAdd }) => {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ rows, columns });
  };

  return (
    <form className='input-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>
          <strong>Enter the number of Rows</strong>
        </label>
        <input
          type='number'
          placeholder='{5}'
          value={rows}
          onChange={(e) => setRows(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>
          <strong> Enter the number of Columns</strong>
        </label>
        <input
          type='number'
          placeholder={5}
          value={columns}
          onChange={(e) => setColumns(e.target.value)}
        />
      </div>
      <input type='submit' value='Generate Table' className='btn btn-block' />
    </form>
  );
};

FormComp.propTypes = {};

export default FormComp;
