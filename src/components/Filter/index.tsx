import './style.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="filter-select">
    Filter by{' '}
    <span>
      {' '}
      <select
        id="filter-select"
        className="filter"
        onChange={onChange}
        value={value}
        defaultChecked={true}
      >
        <br />
        <option value="none">None</option>
        <option value="name">Name</option>
      </select>
    </span>
  </label>
);

export default Filter;
