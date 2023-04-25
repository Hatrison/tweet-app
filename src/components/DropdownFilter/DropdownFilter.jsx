import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Button, Cover, Popup, Wrapper } from './DropdownFilter.styled';

const DropdownFilter = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  const toggleShow = () => {
    setIsShown(!isShown);
  };

  return (
    <Wrapper>
      <Button type="button" onClick={toggleShow}>
        Open Filter
      </Button>
      {isShown && (
        <Cover onClick={toggleShow}>
          <Popup>
            <Button type="button" onClick={() => dispatch(setFilter('all'))}>
              All
            </Button>
            <Button type="button" onClick={() => dispatch(setFilter('follow'))}>
              Follow
            </Button>
            <Button
              type="button"
              onClick={() => dispatch(setFilter('following'))}
            >
              Followings
            </Button>
          </Popup>
        </Cover>
      )}
    </Wrapper>
  );
};

export default DropdownFilter;
