import { FaHandPointLeft, FaHandPointRight, FaHandPointDown, FaHandPointUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Buttons = ({ rows, columns, rowSelect, colSelect, onClick }) => {
  const moveDown = () => {
    console.log('Click');
    if (rowSelect >= rows) {
      rowSelect = rows - 1;
    } else {
      rowSelect = rowSelect + 1;
    }
    console.log({ rowSelect });
    onClick({ rowSelect, colSelect });
  };

  return (
    <>
      <div className='container'>
        <button className='btn' style={{ backgroundColor: 'green', cursor: 'pointer' }}>
          <FaHandPointUp />
        </button>
      </div>
      <div className='container'>
        <button className='btn' style={{ backgroundColor: 'green', cursor: 'pointer' }}>
          <FaHandPointLeft /> <span></span>
        </button>
        <button className='btn' style={{ backgroundColor: 'green', cursor: 'pointer' }}>
          <FaHandPointRight />
        </button>
      </div>
      <div className='container'>
        <button
          className='btn'
          style={{ backgroundColor: 'green', cursor: 'pointer' }}
          onClick={moveDown}
        >
          <FaHandPointDown />
        </button>
      </div>
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
