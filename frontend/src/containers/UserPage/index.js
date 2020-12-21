import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import colorList from './colorList';
import { setUserColor } from '../../store/actions/actionCreators';

function UserPage() {
  const [color, setColor] = useState(colorList[0]);

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  const onSubmitUser = (e) => {
    e.preventDefault();
    dispatch(setUserColor(color.value, user.id));
  }

  return (
    <div className="main">
      <h1>Fake Social Media Site</h1>
      <p>Welcome, {user.name}! Our final step is finding out your favorite color!</p>
      <form>
        <label> Color: </label>
        <Select
          options={colorList}
          value={color}
          onChange={setColor}
        />
        <button
          className="nextButton"
          onClick={onSubmitUser}
        >
          NEXT
        </button>
      </form>
    </div>
  );
}

export default UserPage
