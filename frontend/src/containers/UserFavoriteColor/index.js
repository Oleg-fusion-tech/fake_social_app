import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from "../../store/actions/actionCreators";

function UserPage() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setUserLogout())
  }

  return (
    <div className="main" style={{ background: user.color }}>
      <h1>Fake Social Media Site</h1>
      <p>
        Welcome, {user.name}! Here is your favorite color, {user.color}, displayed on our site.
      </p>
      <p>
        Thanks for joining!
      </p>
      <button onClick={logout}>Reset</button>
    </div>
  );
}

export default UserPage
