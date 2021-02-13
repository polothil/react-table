import PropTypes from 'prop-types';

const DynTable = ({ rows, columns, rowSelect, colSelect }) => {
  const myArray = [];

  for (let i = 0; i < rows; i++) {
    myArray[i] = [];
    for (let j = 0; j < columns; j++) {
      myArray[i][j] = null;
    }
  }
  return (
    <div>
      <table style={{ width: '60%' }} className='center'>
        <tbody>
          {myArray.map((rowItem, rowIndex) => {
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

DynTable.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  rowSelect: PropTypes.number,
  colSelect: PropTypes.number,
};

export default DynTable;
