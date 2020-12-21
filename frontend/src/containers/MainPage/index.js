import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/actionCreators";

function MainPage() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const onChange = (e) => {
    setName(e.target.value)
  }
  const onSubmitUser = async (e) => {
    e.preventDefault();
    dispatch(registerUser(name));
  }

  return (
    <div className='main'>
      <h1>Fake Social Media Site</h1>
      <p>Hi there! Welcome to the site, please tell us about yourself!</p>
      <form>
        <label> Name: </label>
        <input
          className="nameInput"
          type="text"
          autoFocus
          value={name}
          onChange={onChange}
        />
        <button
          className='nextButton'
          onClick={onSubmitUser}
        >
          NEXT
        </button>
      </form>
    </div>
  );
}

export default MainPage
