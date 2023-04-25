import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const DropdownFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(setFilter('all'))}>
        All
      </button>
      <button type="button" onClick={() => dispatch(setFilter('follow'))}>
        Follow
      </button>
      <button type="button" onClick={() => dispatch(setFilter('following'))}>
        Followings
      </button>
    </div>
  );
};

export default DropdownFilter;
