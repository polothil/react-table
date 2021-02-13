import { FaHandPointLeft, FaHandPointRight, FaHandPointDown, FaHandPointUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Buttons = ({ rows, columns, rowSelect, colSelect, onClick }) => {
  const moveDown = () => {
    if (rowSelect >= rows - 1) {
      rowSelect = rowSelect;
    } else {
      rowSelect = rowSelect + 1;
    }
    onClick({ rowSelect, colSelect });
  };

  const moveUp = () => {
    if (rowSelect <= 0) {
      rowSelect = 0;
    } else {
      rowSelect = rowSelect - 1;
    }
    onClick({ rowSelect, colSelect });
  };

  const moveRight = () => {
    if (colSelect >= columns - 1) {
      colSelect = colSelect;
    } else {
      colSelect = colSelect + 1;
    }
    onClick({ rowSelect, colSelect });
  };

  const moveLeft = () => {
    if (colSelect <= 0) {
      colSelect = 0;
    } else {
      colSelect = colSelect - 1;
    }
    onClick({ rowSelect, colSelect });
  };

  return (
    <>
      <div className='container'>
        <button
          className='btn'
          style={{ backgroundColor: 'green', cursor: 'pointer' }}
          onClick={moveUp}
        >
          <FaHandPointUp />
        </button>
      </div>
      <div className='container'>
        <button
          className='btn'
          style={{ backgroundColor: 'green', cursor: 'pointer' }}
          onClick={moveLeft}
        >
          <FaHandPointLeft /> <span></span>
        </button>
        <button
          className='btn'
          style={{ backgroundColor: 'green', cursor: 'pointer' }}
          onClick={moveRight}
        >
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
