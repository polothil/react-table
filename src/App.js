import React from 'react';
import './App.css';

const App = () => {
  const rows = 8;
  const columns = 10;
  const rowSelect = 7;
  const colSelect = 9;

  const array1 = [];

  for (let i = 0; i < rows; i++) {
    array1[i] = [];
    for (let j = 0; j < columns; j++) {
      array1[i][j] = null;
    }
  }

  return (
    <div>
      <table style={{ width: '60%' }} className='center'>
        <tbody>
          {array1.map((rowItem, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {rowItem.map((colItem, colIndex) => {
                  if (colIndex === colSelect && rowIndex === rowSelect) {
                    return (
                      <td style={{ backgroundColor: '#FF0000' }} key={colIndex}>
                        {colItem}
                      </td>
                    );
                  } else return <td key={colIndex}>{colItem}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
