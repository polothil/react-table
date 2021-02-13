import { FaHandPointLeft, FaHandPointRight, FaHandPointDown, FaHandPointUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Buttons = (props) => {
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
        <button className='btn' style={{ backgroundColor: 'green', cursor: 'pointer' }}>
          <FaHandPointDown />
        </button>
      </div>
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
