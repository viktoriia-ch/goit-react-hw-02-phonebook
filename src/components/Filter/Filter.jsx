import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ handleChange }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          onChange={handleChange}
          name="filter"
          placeholder="filter contacts..."
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
